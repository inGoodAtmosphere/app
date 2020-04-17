workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
self.addEventListener('install', () => {
  console.log('sdf');
});

workbox.registerRoute(
  new RegExp('\\.png$'),
  new workbox.strategies.StaleWhileRevalidate({ cacheName: 'asd' }),
);
