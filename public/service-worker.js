const staticCacheName = 'site-static-v2';
const dynamicCacheName = 'site-dynamic-v1';

const id = 'df2L7dp6WPUNWC6IXvPk8';
const styles = 'styles.ec18ad68';
const assets = [
  '/offline',
  'https://fonts.googleapis.com/css?family=Lato:400,700&display=swap&subset=latin-ext',
  `/_next/static/css/${styles}.chunk.css`,
  `/_next/static/${id}/pages/_error.js`,
  `/_next/static/${id}/pages/_app.js`,
  `/_next/static/${id}/pages/offline.js`,
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
