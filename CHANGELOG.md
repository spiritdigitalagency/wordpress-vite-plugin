# Release Notes

## v3.2.0 (2026-09-25)

Add Vite 8 support and implement laravel/vite-plugin changes up to v3.2.0 (fonts plugin not ported).

- Vite 8 (Rolldown): input is written to `build.rolldownOptions`; Vite 7 keeps `build.rollupOptions`. Peer range is `^7.0.0 || ^8.0.0`.
- An input set by the user under either `rollupOptions` or `rolldownOptions` is respected.
- New `assets` option: glob patterns of files to version even if no JS imports them (e.g. images used only in PHP templates).
- CORS uses Vite's `defaultAllowedOrigins`.
- Dev server no longer throws when the server address is null, and skips the hot file under Vitest.

### Upgrading a theme to Vite 8

Projects that stay on Vite 7 need no changes. To move a theme to Vite 8:

1. `npm i -D vite@^8 @spiritdigital/wordpress-vite-plugin@^3.2.0`
2. Replace `build.rollupOptions.output.manualChunks` with `build.rolldownOptions.output.codeSplitting.groups`. Rolldown does not reproduce a `manualChunks` function that routes app code to `'main'`: everything ends up in one chunk. Keep CSS out of the groups (`test: id => ... && !/\.(css|scss)(\?|$)/.test(id)`), otherwise vendor CSS moves to a chunk whose CSS the theme's `vite.php` does not enqueue.
3. Vite 8 minifies CSS with lightningcss, which fails on invalid CSS that esbuild let through (e.g. `@media (min-width: 100%)` from a `container.screens` value of `100%`, or typos like `767pxpx`). Fix the source; browsers were already dropping those rules.

## v0.1.5 (2025-10-05)

Update to Vite 7 and implement laravel/vite-plugin@latest changes from v2.0.1 commit #3f7bf9e.

## v0.1.4 (2024-12-02)

Update to Vite 6

## v0.1.2 (2024-05-09)

Initial release based on https://github.com/laravel/vite-plugin.
