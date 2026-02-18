const CACHE_NAME = 'manual-cache-v1';
const ASSETS = [
  '/',
  'index.html',
  'style.css',
  'script.js'
];


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {

      ASSETS.forEach(asset => {
        cache.add(asset).catch(err => console.error(`Failed to cache: ${asset}`, err));
      });
    })
  );
});


self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});