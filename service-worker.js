import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);
self.addEventListener('install', () => {});

registerRoute(
  new RegExp('\\.png$'),
  new StaleWhileRevalidate({ cacheName: 'png' }),
);
