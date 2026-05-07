// Service Worker - MH Sport Césped
// Fuerza recarga automática cuando hay una nueva versión disponible

const CACHE_NAME = 'mhsport-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
];

// Extensiones de archivos que queremos cachear (imágenes y fuentes)
const IMAGE_TYPES = /\.(png|jpg|jpeg|gif|webp|avif|svg|ico|woff|woff2)$/i;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Estrategia Cache First para imágenes y activos estáticos
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (IMAGE_TYPES.test(url.pathname)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request).then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        });
      })
    );
  }
});

// Notificar a los clientes para recarga
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

