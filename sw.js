const CACHE_NAME = 'orlando-trip-v11';

const PRECACHE_URLS = [
  '/orlando-trip/',
  '/orlando-trip/index.html',
  '/orlando-trip/sw.js',
  '/orlando-trip/manifest.json',
  '/orlando-trip/icon-192.png',
  '/orlando-trip/icon-512.png',
  '/orlando-trip/data/content.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Weather API — always fetch from network, never cache
  if (event.request.url.includes('open-meteo.com')) {
    event.respondWith(fetch(event.request));
    return;
  }

  // HTML navigation — network-first so app updates are always visible
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match('/orlando-trip/index.html'))
    );
    return;
  }

  // Everything else — cache-first for speed
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {});
    })
  );
});
