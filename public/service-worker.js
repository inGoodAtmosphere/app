const staticCacheName = 'site-static-v1';
const dynamicCacheName = 'site-dynamic-v1';
const assets = [
  '/',
  '/offline',
  'https://fonts.googleapis.com/css?family=Lato:400,700&display=swap&subset=latin-ext',
  '/_next/static/css/styles.6f9dd3a5.chunk.css',
  '/_next/static/2PizZtLiDgO2o6I7Ed102/pages/index.js',
  '/_next/static/2PizZtLiDgO2o6I7Ed102/pages/_app.js',
  '/_next/static/2PizZtLiDgO2o6I7Ed102/pages/_error.js',
  '/img/hero-images/1280.jpg',
  '/img/gliwice.png',
  '/img/tvp.png',
  '/img/msk.png',
  '/img/botland.png',
];

const limitCacheSize = (name, size) => {
  caches.open(name).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    }),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter(
              (key) => key !== staticCacheName && key !== dynamicCacheName,
            )
            .map((key) => caches.delete(key)),
        ),
      ),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then(
        (cacheRes) =>
          cacheRes ||
          fetch(event.request).then(async (fetchRes) => {
            const cache = await caches.open(dynamicCacheName);
            if (!/^https?:$/i.test(new URL(event.request.url).protocol)) return;
            cache.put(event.request.url, fetchRes.clone());
            // check cached items size
            limitCacheSize(dynamicCacheName, 20);
            return fetchRes;
          }),
      )
      .catch(() => {
        if (event.request.destination === 'unknown') {
          return caches.match('/offline');
        }
      }),
  );
});
