const CACHE_NAME = "thirtysecs-cache-v3";

const base = self.registration.scope;
const ASSETS = [
  base,
  base + "index.html",
  base + "app.js",
  base + "style.css",
  base + "manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  // Take over immediately — don't wait for old SW to expire
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => k !== CACHE_NAME ? caches.delete(k) : null))
    ).then(() => self.clients.claim()) // Take control of open tabs right away
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Navigation requests: network-first so updates are seen immediately,
  // fall back to cache only if truly offline
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then(res => {
          // Stash a fresh copy while we're at it
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, clone));
          return res;
        })
        .catch(() => caches.match(base + "index.html"))
    );
    return;
  }

  // Assets: cache-first (they're versioned by the SW cache name bump)
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req))
  );
});
