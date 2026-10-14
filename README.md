# Totus Tuus — Release Candidate v10.1

This package contains the installable Progressive Web App (PWA). It includes all 33 daily readings, prayers, reflections, journal, calendar, and the dedicated Day 34 consecration screen.

## Publish
Upload **all files and folders in this package**, preserving their structure, to an HTTPS-enabled static web host. The landing page is `index.html`. For example, GitHub Pages, Netlify, or Cloudflare Pages can serve this folder. Do not open `index.html` from a `file://` URL to test PWA installation: service workers require HTTPS (or localhost).

## Install
On Android Chrome, open the hosted site and choose **Install app** / **Add to Home screen** from the browser menu. On iPhone Safari, open the hosted site, tap **Share**, then **Add to Home Screen**. Installation behavior varies by browser and iOS version.

## Offline and privacy
After the app has been opened successfully while online and its service worker has installed, the app shell and devotional content are cached for offline use. The PWA has no external assets, trackers, or ads. Journal and progress data stay in the browser's localStorage for the site's origin. Clearing site data or using another browser/device may erase them. The standalone HTML version stores data under a different origin and does not automatically share progress with the hosted PWA.

## Acceptance test
1. Select a feast and confirm its start date is 33 days before the feast.
2. Open Days 1, 33, and 34; verify Next Day on Day 33 opens Marian Consecration Day.
3. Mark a day complete, enter journal text, and save a consecration date; reload and verify persistence.
4. Close and reopen the installed PWA in airplane mode after an initial online load.
5. Verify prayer text, font size, scrolling, and swipe navigation on your device.

## Status
This is a technical release candidate, not a final ecclesiastical endorsement. Full historical-text collation and final editorial approval remain pending.

## Validation note
Automated static checks pass. This environment blocked navigation to local HTTP and file URLs in headless Chromium, so real browser reload, service-worker offline operation, and installation are **not certified** by this build. Device acceptance testing is still required.
