const CACHE_NAME = 'manual-cache-v1';
const ASSETS = [
  '/',
  'index.html',
  'style.css',
  'script.js',
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0',
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
  'https://fonts.maateen.me/solaiman-lipi/font.css',
  'esha.jpeg',
  'fazr.jpg',
  'maghrib.jpg',
  'zahr.jpg',
  'achor.jpg'
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
