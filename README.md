# Totus Tuus v10.7 — experimental minimal-UI test

This is a diagnostic variant of v10.6. Only the PWA manifest display setting and service-worker cache identifier changed.

The manifest requests `display: minimal-ui` instead of `standalone`. Android Chrome may ignore this request or may require a fresh installation before changing the installed app window. This experiment is not guaranteed to change Android system navigation-bar colors.

Upload all files to the root of the existing GitHub Pages repository. After deployment, test the published website. To test a *fresh install*, first ensure journal/progress data is backed up or no longer needed: uninstalling/clearing site data may erase locally stored progress. Prefer testing with a separate browser profile or device rather than risking existing data.

Keep v10.6 as a fallback if the experiment does not improve visibility.


v10.8 iOS compatibility: Adds Apple Home Screen metadata and 180px touch icon; retains v10.7 minimal-ui manifest setting for Android. Reinstall not recommended on Android. iPhone Safari acceptance testing is still required.

Version 10.9: prompts for confirmation before changing feast selection when it would erase saved progress, journal entries, or consecration records. iOS compatibility remains device-test pending.

Version 10.10: Accessible in-app feast-change confirmation dialog; replaces browser-origin native confirmation. No change to saved data structure or PWA display mode.


v10.12: Corrected Day 4 opening sentences to William Benham translation, Book III, Chapter VII, paragraph 4. No other reading changed.
