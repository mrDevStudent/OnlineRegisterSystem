// Minimal service worker — enables PWA install/packaging.
// Passes requests straight through to the network (no offline caching yet).
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', () => {});
