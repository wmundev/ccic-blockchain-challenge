// Retirement worker: keep this URL available for browsers with the old CRA
// worker installed. New visits do not register a worker or cache app resources.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames
          .filter((name) => name.startsWith("workbox-precache-") || name === "images")
          .map((name) => caches.delete(name))
      );
      await self.clients.claim();
      await self.registration.unregister();
    })()
  );
});
