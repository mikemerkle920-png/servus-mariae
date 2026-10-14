# Totus Tuus v10.3 - GitHub Pages deployment

This update fixes missing PWA installation wiring in index.html.

1. In the existing GitHub repository, replace `index.html`, `manifest.webmanifest`, and `sw.js` with the files from this ZIP. Keep the `icons/` folder and its files at the same level as `index.html`. (Alternatively, upload all ZIP contents to the repository root.)
2. GitHub Settings > Pages: Deploy from branch `main`, folder `/(root)`.
3. After deployment, open the published HTTPS URL. The manifest is at `https://YOUR-USERNAME.github.io/totustuus/manifest.webmanifest` and service worker at `/totustuus/sw.js`.
4. Android Chrome: menu > Add to Home screen / Install app. Brave may handle PWA installation differently; test Chrome first.
5. If an older copy remains, reload the site and clear its site data or remove any old home-screen shortcut, then retry.
6. Open the installed app, load it once while online, then test offline.

Standalone HTML is a separate file and does not install as a PWA when opened locally.
