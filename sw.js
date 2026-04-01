// --- SERVICE WORKER : VERSION PRO ---
const CACHE_NAME = 'tarot-pro-v1';

// On liste tout ce que l'appli doit mémoriser
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Installation : on télécharge les fichiers dans le cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Tarot Pro : Cache ouvert');
      return cache.addAll(ASSETS);
    })
  );
});

// Utilisation : on sert les fichiers du cache si on est hors-ligne
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});