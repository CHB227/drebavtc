// Service Worker pour Dréba VTC
const CACHE_NAME = 'dreba-vtc-v1';
const urlsToCache = [
  '/',
  '/Dréba VTC.html',
  '/driver-dashboard.html',
  'Icon/Logo.png',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('✅ Cache ouvert');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('❌ Erreur cache:', error);
      })
  );
  self.skipWaiting();
});

// Activation du Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Suppression ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Intercepter les requêtes réseau
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Retourner la réponse du cache si disponible, sinon faire une requête réseau
        return response || fetch(event.request).then((response) => {
          // Ne mettre en cache que les requêtes GET réussies
          if (event.request.method === 'GET' && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        });
      })
      .catch(() => {
        // En cas d'erreur, retourner une page hors ligne si c'est une navigation
        if (event.request.mode === 'navigate') {
          return caches.match('/Dréba VTC.html');
        }
      })
  );
});

// Gérer les notifications push (pour plus tard)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Nouvelle notification Dréba VTC',
    icon: 'Icon/Logo.png',
    badge: 'Icon/Logo.png',
    vibrate: [200, 100, 200],
    tag: 'dreba-vtc-notification'
  };

  event.waitUntil(
    self.registration.showNotification('Dréba VTC', options)
  );
});

