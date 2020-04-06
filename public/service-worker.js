const staticCacheName = 'site-static-v2';
const dynamicCacheName = 'site-dynamic-v1';

const obx = 'Xd3O1AJhfJ6_iPAEwR0F1';
const localhost = 'v9lu_CgfvHVSE9FCgHH9G';

const assets = [
  '/offline',
  'https://fonts.googleapis.com/css?family=Lato:400,700&display=swap&subset=latin-ext',
  '/_next/static/css/styles.ee74b118.chunk.css',
  `/_next/static/${localhost}/pages/_app.js`,
  `/_next/static/${localhost}/pages/_error.js`,
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
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
            .filter((key) => key !== staticCacheName)
            .map((key) => caches.delete(key)),
        ),
      ),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((cacheRes) => cacheRes || fetch(event.request))
      .catch(() => caches.match('/offline')),
  );
});
