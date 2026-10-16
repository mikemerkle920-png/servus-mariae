/* Servus Mariae v10.18.1: range-aware audio and opt-in offline caching. */
const SHELL='servus-mariae-v10-18-1';
const AUDIO='servus-mariae-audio-v1';
const ASSETS=['./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./marian-welcome.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(SHELL).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>(k.startsWith('totus-tuus-')||k.startsWith('servus-mariae-v'))&&k!==SHELL).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const req=event.request, url=new URL(req.url);
 if(req.method!=='GET'||url.origin!==self.location.origin)return;
 if(url.pathname.endsWith('.mp3')){
  event.respondWith((async()=>{
   const cache=await caches.open(AUDIO);const stored=await cache.match(url.href);
   if(!stored)return fetch(req);
   const range=req.headers.get('range');if(!range)return stored;
   const m=/^bytes=(\d*)-(\d*)$/.exec(range);if(!m)return fetch(req);
   const blob=await stored.blob();const total=blob.size;
   const start=m[1]?Number(m[1]):Math.max(0,total-Number(m[2]));
   const end=m[1]?(m[2]?Math.min(Number(m[2]),total-1):total-1):total-1;
   if(start>=total||start>end)return new Response(null,{status:416,headers:{'Content-Range':`bytes */${total}`}});
   return new Response(blob.slice(start,end+1),{status:206,headers:{'Content-Type':stored.headers.get('Content-Type')||'audio/mpeg','Accept-Ranges':'bytes','Content-Range':`bytes ${start}-${end}/${total}`,'Content-Length':String(end-start+1)}});
  })());return;
 }
 if(req.mode==='navigate'){
  event.respondWith(fetch(req,{cache:'no-store'}).then(resp=>{if(resp.ok){const copy=resp.clone();event.waitUntil(caches.open(SHELL).then(c=>c.put('./index.html',copy)));}return resp;}).catch(()=>caches.match('./index.html')));return;
 }
 event.respondWith(caches.match(req).then(c=>c||fetch(req)));
});
