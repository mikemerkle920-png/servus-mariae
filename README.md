# Totus Tuus v10.7 — experimental minimal-UI test

This is a diagnostic variant of v10.6. Only the PWA manifest display setting and service-worker cache identifier changed.

The manifest requests `display: minimal-ui` instead of `standalone`. Android Chrome may ignore this request or may require a fresh installation before changing the installed app window. This experiment is not guaranteed to change Android system navigation-bar colors.

Upload all files to the root of the existing GitHub Pages repository. After deployment, test the published website. To test a *fresh install*, first ensure journal/progress data is backed up or no longer needed: uninstalling/clearing site data may erase locally stored progress. Prefer testing with a separate browser profile or device rather than risking existing data.

Keep v10.6 as a fallback if the experiment does not improve visibility.
