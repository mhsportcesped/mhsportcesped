// Service Worker - MH Sport Césped
// Fuerza recarga automática cuando hay una nueva versión disponible

const CACHE_NAME = 'mhsport-v1';

self.addEventListener('install', (event) => {
  // Toma el control inmediatamente sin esperar a que se cierre la pestaña
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    // Elimina caches antiguas
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => {
      // Toma control de todas las pestañas abiertas
      return self.clients.claim();
    })
  );
});

// Cuando el SW se activa, notifica a todos los clientes para que recarguen
self.addEventListener('activate', (event) => {
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then((clients) => {
      clients.forEach((client) => {
        client.postMessage({ type: 'SW_UPDATED' });
      });
    })
  );
});
