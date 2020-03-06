try {
  self['workbox:core:5.0.0'] && _();
} catch (e) {}
const e = (e, ...t) => {
  let s = e;
  return t.length > 0 && (s += ` :: ${JSON.stringify(t)}`), s;
};
class t extends Error {
  constructor(t, s) {
    super(e(t, s)), (this.name = t), (this.details = s);
  }
}
try {
  self['workbox:routing:5.0.0'] && _();
} catch (e) {}
const s = (e) => (e && 'object' == typeof e ? e : { handle: e });
class n {
  constructor(e, t, n = 'GET') {
    (this.handler = s(t)), (this.match = e), (this.method = n);
  }
}
class i extends n {
  constructor(e, t, s) {
    super(
      ({ url: t }) => {
        const s = e.exec(t.href);
        if (s && (t.origin === location.origin || 0 === s.index))
          return s.slice(1);
      },
      t,
      s,
    );
  }
}
const a = (e) => {
  const t = new URL(String(e), location.href);
  return t.origin === location.origin ? t.pathname : t.href;
};
class c {
  constructor() {
    this.t = new Map();
  }
  get routes() {
    return this.t;
  }
  addFetchListener() {
    self.addEventListener('fetch', (e) => {
      const { request: t } = e,
        s = this.handleRequest({ request: t, event: e });
      s && e.respondWith(s);
    });
  }
  addCacheListener() {
    self.addEventListener('message', (e) => {
      if (e.data && 'CACHE_URLS' === e.data.type) {
        const { payload: t } = e.data,
          s = Promise.all(
            t.urlsToCache.map((e) => {
              'string' == typeof e && (e = [e]);
              const t = new Request(...e);
              return this.handleRequest({ request: t });
            }),
          );
        e.waitUntil(s),
          e.ports && e.ports[0] && s.then(() => e.ports[0].postMessage(!0));
      }
    });
  }
  handleRequest({ request: e, event: t }) {
    const s = new URL(e.url, location.href);
    if (!s.protocol.startsWith('http')) return;
    let n,
      { params: i, route: a } = this.findMatchingRoute({
        url: s,
        request: e,
        event: t,
      }),
      c = a && a.handler;
    if ((!c && this.s && (c = this.s), c)) {
      try {
        n = c.handle({ url: s, request: e, event: t, params: i });
      } catch (e) {
        n = Promise.reject(e);
      }
      return (
        n instanceof Promise &&
          this.i &&
          (n = n.catch((n) => this.i.handle({ url: s, request: e, event: t }))),
        n
      );
    }
  }
  findMatchingRoute({ url: e, request: t, event: s }) {
    const n = this.t.get(t.method) || [];
    for (const i of n) {
      let n,
        a = i.match({ url: e, request: t, event: s });
      if (a)
        return (
          (n = a),
          ((Array.isArray(a) && 0 === a.length) ||
            (a.constructor === Object && 0 === Object.keys(a).length) ||
            'boolean' == typeof a) &&
            (n = void 0),
          { route: i, params: n }
        );
    }
    return {};
  }
  setDefaultHandler(e) {
    this.s = s(e);
  }
  setCatchHandler(e) {
    this.i = s(e);
  }
  registerRoute(e) {
    this.t.has(e.method) || this.t.set(e.method, []),
      this.t.get(e.method).push(e);
  }
  unregisterRoute(e) {
    if (!this.t.has(e.method))
      throw new t('unregister-route-but-not-found-with-method', {
        method: e.method,
      });
    const s = this.t.get(e.method).indexOf(e);
    if (!(s > -1)) throw new t('unregister-route-route-not-registered');
    this.t.get(e.method).splice(s, 1);
  }
}
let r;
const o = () => (
  r || ((r = new c()), r.addFetchListener(), r.addCacheListener()), r
);
const u = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: 'undefined' != typeof registration ? registration.scope : '',
  },
  h = (e) => [u.prefix, e, u.suffix].filter((e) => e && e.length > 0).join('-'),
  l = (e) => e || h(u.precache),
  f = (e) => e || h(u.runtime);
function d(e) {
  e.then(() => {});
}
const p = new Set();
class w {
  constructor(e, t, { onupgradeneeded: s, onversionchange: n } = {}) {
    (this.o = null),
      (this.u = e),
      (this.h = t),
      (this.l = s),
      (this.p = n || (() => this.close()));
  }
  get db() {
    return this.o;
  }
  async open() {
    if (!this.o)
      return (
        (this.o = await new Promise((e, t) => {
          let s = !1;
          setTimeout(() => {
            (s = !0),
              t(new Error('The open request was blocked and timed out'));
          }, this.OPEN_TIMEOUT);
          const n = indexedDB.open(this.u, this.h);
          (n.onerror = () => t(n.error)),
            (n.onupgradeneeded = (e) => {
              s
                ? (n.transaction.abort(), n.result.close())
                : 'function' == typeof this.l && this.l(e);
            }),
            (n.onsuccess = () => {
              const t = n.result;
              s ? t.close() : ((t.onversionchange = this.p.bind(this)), e(t));
            });
        })),
        this
      );
  }
  async getKey(e, t) {
    return (await this.getAllKeys(e, t, 1))[0];
  }
  async getAll(e, t, s) {
    return await this.getAllMatching(e, { query: t, count: s });
  }
  async getAllKeys(e, t, s) {
    return (
      await this.getAllMatching(e, { query: t, count: s, includeKeys: !0 })
    ).map((e) => e.key);
  }
  async getAllMatching(
    e,
    {
      index: t,
      query: s = null,
      direction: n = 'next',
      count: i,
      includeKeys: a = !1,
    } = {},
  ) {
    return await this.transaction([e], 'readonly', (c, r) => {
      const o = c.objectStore(e),
        u = t ? o.index(t) : o,
        h = [],
        l = u.openCursor(s, n);
      l.onsuccess = () => {
        const e = l.result;
        e
          ? (h.push(a ? e : e.value), i && h.length >= i ? r(h) : e.continue())
          : r(h);
      };
    });
  }
  async transaction(e, t, s) {
    return (
      await this.open(),
      await new Promise((n, i) => {
        const a = this.o.transaction(e, t);
        (a.onabort = () => i(a.error)),
          (a.oncomplete = () => n()),
          s(a, (e) => n(e));
      })
    );
  }
  async g(e, t, s, ...n) {
    return await this.transaction([t], s, (s, i) => {
      const a = s.objectStore(t),
        c = a[e].apply(a, n);
      c.onsuccess = () => i(c.result);
    });
  }
  close() {
    this.o && (this.o.close(), (this.o = null));
  }
}
w.prototype.OPEN_TIMEOUT = 2e3;
const y = {
  readonly: ['get', 'count', 'getKey', 'getAll', 'getAllKeys'],
  readwrite: ['add', 'put', 'clear', 'delete'],
};
for (const [e, t] of Object.entries(y))
  for (const s of t)
    s in IDBObjectStore.prototype &&
      (w.prototype[s] = async function(t, ...n) {
        return await this.g(s, t, e, ...n);
      });
try {
  self['workbox:expiration:5.0.0'] && _();
} catch (e) {}
const g = (e) => {
  const t = new URL(e, location.href);
  return (t.hash = ''), t.href;
};
class m {
  constructor(e) {
    (this.m = e),
      (this.o = new w('workbox-expiration', 1, {
        onupgradeneeded: (e) => this.v(e),
      }));
  }
  v(e) {
    const t = e.target.result.createObjectStore('cache-entries', {
      keyPath: 'id',
    });
    t.createIndex('cacheName', 'cacheName', { unique: !1 }),
      t.createIndex('timestamp', 'timestamp', { unique: !1 }),
      (async (e) => {
        await new Promise((t, s) => {
          const n = indexedDB.deleteDatabase(e);
          (n.onerror = () => {
            s(n.error);
          }),
            (n.onblocked = () => {
              s(new Error('Delete blocked'));
            }),
            (n.onsuccess = () => {
              t();
            });
        });
      })(this.m);
  }
  async setTimestamp(e, t) {
    const s = {
      url: (e = g(e)),
      timestamp: t,
      cacheName: this.m,
      id: this.q(e),
    };
    await this.o.put('cache-entries', s);
  }
  async getTimestamp(e) {
    return (await this.o.get('cache-entries', this.q(e))).timestamp;
  }
  async expireEntries(e, t) {
    const s = await this.o.transaction('cache-entries', 'readwrite', (s, n) => {
        const i = s
            .objectStore('cache-entries')
            .index('timestamp')
            .openCursor(null, 'prev'),
          a = [];
        let c = 0;
        i.onsuccess = () => {
          const s = i.result;
          if (s) {
            const n = s.value;
            n.cacheName === this.m &&
              ((e && n.timestamp < e) || (t && c >= t) ? a.push(s.value) : c++),
              s.continue();
          } else n(a);
        };
      }),
      n = [];
    for (const e of s)
      await this.o.delete('cache-entries', e.id), n.push(e.url);
    return n;
  }
  q(e) {
    return this.m + '|' + g(e);
  }
}
class b {
  constructor(e, t = {}) {
    (this.R = !1),
      (this._ = !1),
      (this.U = t.maxEntries),
      (this.L = t.maxAgeSeconds),
      (this.m = e),
      (this.S = new m(e));
  }
  async expireEntries() {
    if (this.R) return void (this._ = !0);
    this.R = !0;
    const e = this.L ? Date.now() - 1e3 * this.L : 0,
      t = await this.S.expireEntries(e, this.U),
      s = await self.caches.open(this.m);
    for (const e of t) await s.delete(e);
    (this.R = !1), this._ && ((this._ = !1), d(this.expireEntries()));
  }
  async updateTimestamp(e) {
    await this.S.setTimestamp(e, Date.now());
  }
  async isURLExpired(e) {
    if (this.L) {
      return (await this.S.getTimestamp(e)) < Date.now() - 1e3 * this.L;
    }
    return !1;
  }
  async delete() {
    (this._ = !1), await this.S.expireEntries(1 / 0);
  }
}
const v = (e, t) => e.filter((e) => t in e),
  x = async ({
    cacheName: e,
    request: t,
    event: s,
    matchOptions: n,
    plugins: i = [],
  }) => {
    const a = await self.caches.open(e),
      c = await R({ plugins: i, request: t, mode: 'read' });
    let r = await a.match(c, n);
    for (const t of i)
      if ('cachedResponseWillBeUsed' in t) {
        const i = t.cachedResponseWillBeUsed;
        r = await i.call(t, {
          cacheName: e,
          event: s,
          matchOptions: n,
          cachedResponse: r,
          request: c,
        });
      }
    return r;
  },
  q = async ({ request: e, response: t, event: s, plugins: n = [] }) => {
    let i = t,
      a = !1;
    for (let t of n)
      if ('cacheWillUpdate' in t) {
        a = !0;
        const n = t.cacheWillUpdate;
        if (((i = await n.call(t, { request: e, response: i, event: s })), !i))
          break;
      }
    return a || (i = i && 200 === i.status ? i : void 0), i || null;
  },
  R = async ({ request: e, mode: t, plugins: s = [] }) => {
    const n = v(s, 'cacheKeyWillBeUsed');
    let i = e;
    for (const e of n)
      (i = await e.cacheKeyWillBeUsed.call(e, { mode: t, request: i })),
        'string' == typeof i && (i = new Request(i));
    return i;
  },
  U = {
    put: async ({
      cacheName: e,
      request: s,
      response: n,
      event: i,
      plugins: c = [],
      matchOptions: r,
    }) => {
      const o = await R({ plugins: c, request: s, mode: 'write' });
      if (!n) throw new t('cache-put-with-no-response', { url: a(o.url) });
      let u = await q({ event: i, plugins: c, response: n, request: o });
      if (!u) return;
      const h = await self.caches.open(e),
        l = v(c, 'cacheDidUpdate');
      let f =
        l.length > 0
          ? await x({ cacheName: e, matchOptions: r, request: o })
          : null;
      try {
        await h.put(o, u);
      } catch (e) {
        throw ('QuotaExceededError' === e.name &&
          (await (async function() {
            for (const e of p) await e();
          })()),
        e);
      }
      for (let t of l)
        await t.cacheDidUpdate.call(t, {
          cacheName: e,
          event: i,
          oldResponse: f,
          newResponse: u,
          request: o,
        });
    },
    match: x,
  },
  L = async ({ request: e, fetchOptions: s, event: n, plugins: i = [] }) => {
    if (
      ('string' == typeof e && (e = new Request(e)),
      n instanceof FetchEvent && n.preloadResponse)
    ) {
      const e = await n.preloadResponse;
      if (e) return e;
    }
    const a = v(i, 'fetchDidFail'),
      c = a.length > 0 ? e.clone() : null;
    try {
      for (let t of i)
        if ('requestWillFetch' in t) {
          const s = t.requestWillFetch,
            i = e.clone();
          e = await s.call(t, { request: i, event: n });
        }
    } catch (e) {
      throw new t('plugin-error-request-will-fetch', { thrownError: e });
    }
    let r = e.clone();
    try {
      let t;
      t = 'navigate' === e.mode ? await fetch(e) : await fetch(e, s);
      for (const e of i)
        'fetchDidSucceed' in e &&
          (t = await e.fetchDidSucceed.call(e, {
            event: n,
            request: r,
            response: t,
          }));
      return t;
    } catch (e) {
      for (const t of a)
        await t.fetchDidFail.call(t, {
          error: e,
          event: n,
          originalRequest: c.clone(),
          request: r.clone(),
        });
      throw e;
    }
  };
try {
  self['workbox:strategies:5.0.0'] && _();
} catch (e) {}
const S = {
  cacheWillUpdate: async ({ response: e }) =>
    200 === e.status || 0 === e.status ? e : null,
};
let E;
async function M(e, t) {
  const s = e.clone(),
    n = {
      headers: new Headers(s.headers),
      status: s.status,
      statusText: s.statusText,
    },
    i = t ? t(n) : n,
    a = (function() {
      if (void 0 === E) {
        const e = new Response('');
        if ('body' in e)
          try {
            new Response(e.body), (E = !0);
          } catch (e) {
            E = !1;
          }
        E = !1;
      }
      return E;
    })()
      ? s.body
      : await s.blob();
  return new Response(a, i);
}
try {
  self['workbox:precaching:5.0.0'] && _();
} catch (e) {}
function j(e) {
  if (!e) throw new t('add-to-cache-list-unexpected-type', { entry: e });
  if ('string' == typeof e) {
    const t = new URL(e, location.href);
    return { cacheKey: t.href, url: t.href };
  }
  const { revision: s, url: n } = e;
  if (!n) throw new t('add-to-cache-list-unexpected-type', { entry: e });
  if (!s) {
    const e = new URL(n, location.href);
    return { cacheKey: e.href, url: e.href };
  }
  const i = new URL(n, location.href),
    a = new URL(n, location.href);
  return (
    i.searchParams.set('__WB_REVISION__', s), { cacheKey: i.href, url: a.href }
  );
}
class k {
  constructor(e) {
    (this.m = l(e)),
      (this.M = new Map()),
      (this.j = new Map()),
      (this.k = new Map());
  }
  addToCacheList(e) {
    const s = [];
    for (const n of e) {
      'string' == typeof n
        ? s.push(n)
        : n && void 0 === n.revision && s.push(n.url);
      const { cacheKey: e, url: i } = j(n),
        a = 'string' != typeof n && n.revision ? 'reload' : 'default';
      if (this.M.has(i) && this.M.get(i) !== e)
        throw new t('add-to-cache-list-conflicting-entries', {
          firstEntry: this.M.get(i),
          secondEntry: e,
        });
      if ('string' != typeof n && n.integrity) {
        if (this.k.has(e) && this.k.get(e) !== n.integrity)
          throw new t('add-to-cache-list-conflicting-integrities', { url: i });
        this.k.set(e, n.integrity);
      }
      if ((this.M.set(i, e), this.j.set(i, a), s.length > 0)) {
        const e =
          'Workbox is precaching URLs without revision ' +
          `info: ${s.join(', ')}\nThis is generally NOT safe. ` +
          'Learn more at https://bit.ly/wb-precache';
        console.warn(e);
      }
    }
  }
  async install({ event: e, plugins: t } = {}) {
    const s = [],
      n = [],
      i = await self.caches.open(this.m),
      a = await i.keys(),
      c = new Set(a.map((e) => e.url));
    for (const [e, t] of this.M)
      c.has(t) ? n.push(e) : s.push({ cacheKey: t, url: e });
    const r = s.map(({ cacheKey: s, url: n }) => {
      const i = this.k.get(s),
        a = this.j.get(n);
      return this.P({
        cacheKey: s,
        cacheMode: a,
        event: e,
        integrity: i,
        plugins: t,
        url: n,
      });
    });
    return (
      await Promise.all(r),
      { updatedURLs: s.map((e) => e.url), notUpdatedURLs: n }
    );
  }
  async activate() {
    const e = await self.caches.open(this.m),
      t = await e.keys(),
      s = new Set(this.M.values()),
      n = [];
    for (const i of t) s.has(i.url) || (await e.delete(i), n.push(i.url));
    return { deletedURLs: n };
  }
  async P({
    cacheKey: e,
    url: s,
    cacheMode: n,
    event: i,
    plugins: a,
    integrity: c,
  }) {
    const r = new Request(s, {
      integrity: c,
      cache: n,
      credentials: 'same-origin',
    });
    let o,
      u = await L({ event: i, plugins: a, request: r });
    for (const e of a || []) 'cacheWillUpdate' in e && (o = e);
    if (
      !(o
        ? await o.cacheWillUpdate({ event: i, request: r, response: u })
        : u.status < 400)
    )
      throw new t('bad-precaching-response', { url: s, status: u.status });
    u.redirected && (u = await M(u)),
      await U.put({
        event: i,
        plugins: a,
        response: u,
        request: e === s ? r : new Request(e),
        cacheName: this.m,
        matchOptions: { ignoreSearch: !0 },
      });
  }
  getURLsToCacheKeys() {
    return this.M;
  }
  getCachedURLs() {
    return [...this.M.keys()];
  }
  getCacheKeyForURL(e) {
    const t = new URL(e, location.href);
    return this.M.get(t.href);
  }
  async matchPrecache(e) {
    const t = e instanceof Request ? e.url : e,
      s = this.getCacheKeyForURL(t);
    if (s) {
      return (await self.caches.open(this.m)).match(s);
    }
  }
  createHandler(e = !0) {
    return async ({ request: s }) => {
      try {
        const e = await this.matchPrecache(s);
        if (e) return e;
        throw new t('missing-precache-entry', {
          cacheName: this.m,
          url: s instanceof Request ? s.url : s,
        });
      } catch (t) {
        if (e) return fetch(s);
        throw t;
      }
    };
  }
  createHandlerBoundToURL(e, s = !0) {
    if (!this.getCacheKeyForURL(e))
      throw new t('non-precached-url', { url: e });
    const n = this.createHandler(s),
      i = new Request(e);
    return () => n({ request: i });
  }
}
let P;
const D = () => (P || (P = new k()), P);
const N = (e, t) => {
  const s = D().getURLsToCacheKeys();
  for (const n of (function*(
    e,
    {
      ignoreURLParametersMatching: t,
      directoryIndex: s,
      cleanURLs: n,
      urlManipulation: i,
    } = {},
  ) {
    const a = new URL(e, location.href);
    (a.hash = ''), yield a.href;
    const c = (function(e, t = []) {
      for (const s of [...e.searchParams.keys()])
        t.some((e) => e.test(s)) && e.searchParams.delete(s);
      return e;
    })(a, t);
    if ((yield c.href, s && c.pathname.endsWith('/'))) {
      const e = new URL(c.href);
      (e.pathname += s), yield e.href;
    }
    if (n) {
      const e = new URL(c.href);
      (e.pathname += '.html'), yield e.href;
    }
    if (i) {
      const e = i({ url: a });
      for (const t of e) yield t.href;
    }
  })(e, t)) {
    const e = s.get(n);
    if (e) return e;
  }
};
let C = !1;
function A(e) {
  C ||
    ((({
      ignoreURLParametersMatching: e = [/^utm_/],
      directoryIndex: t = 'index.html',
      cleanURLs: s = !0,
      urlManipulation: n,
    } = {}) => {
      const i = l();
      self.addEventListener('fetch', (a) => {
        const c = N(a.request.url, {
          cleanURLs: s,
          directoryIndex: t,
          ignoreURLParametersMatching: e,
          urlManipulation: n,
        });
        if (!c) return;
        let r = self.caches
          .open(i)
          .then((e) => e.match(c))
          .then((e) => e || fetch(c));
        a.respondWith(r);
      });
    })(e),
    (C = !0));
}
const T = [],
  K = {
    get: () => T,
    add(e) {
      T.push(...e);
    },
  },
  O = (e) => {
    const t = D(),
      s = K.get();
    e.waitUntil(
      t.install({ event: e, plugins: s }).catch((e) => {
        throw e;
      }),
    );
  },
  Q = (e) => {
    const t = D();
    e.waitUntil(t.activate());
  };
var I;
self.addEventListener('message', (e) => {
  e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting();
}),
  (I = {}),
  (function(e) {
    D().addToCacheList(e),
      e.length > 0 &&
        (self.addEventListener('install', O),
        self.addEventListener('activate', Q));
  })([
    {
      url: '_next/static/2SSJQ8xA7pCdPou9DE5nM/_buildManifest.js',
      revision: 'fb96ae7926f5104f50f0cf1b3a23a9b5',
    },
    {
      url: '_next/static/2SSJQ8xA7pCdPou9DE5nM/pages/_app.js',
      revision: '64f0d39e1fc7dc8dbca7a0499fe20496',
    },
    {
      url: '_next/static/2SSJQ8xA7pCdPou9DE5nM/pages/_error.js',
      revision: '9781e60a9dc5d436cf8dd0513d84268f',
    },
    {
      url: '_next/static/2SSJQ8xA7pCdPou9DE5nM/pages/encyklopedia.js',
      revision: '7e091f084fa6f8b0247466f104c6eb88',
    },
    {
      url: '_next/static/2SSJQ8xA7pCdPou9DE5nM/pages/index.js',
      revision: '92fc436da918d2951475825898600d0a',
    },
    {
      url: '_next/static/2SSJQ8xA7pCdPou9DE5nM/pages/kampania.js',
      revision: '6d9e31febc344426cc75f90ecac19cf3',
    },
    {
      url: '_next/static/2SSJQ8xA7pCdPou9DE5nM/pages/kampania/[header].js',
      revision: '72c960ebc8ba5245b7f3fb9b1ef07335',
    },
    {
      url: '_next/static/2SSJQ8xA7pCdPou9DE5nM/pages/kontakt.js',
      revision: '4905fa9f09b72795a24b3c57ac9604cb',
    },
    {
      url: '_next/static/2SSJQ8xA7pCdPou9DE5nM/pages/mierniki.js',
      revision: '61e79b450cded636155a8966459fe3de',
    },
    {
      url: '_next/static/2SSJQ8xA7pCdPou9DE5nM/pages/o-nas.js',
      revision: 'eb1f1ad2706845f182db81eaa733182e',
    },
    {
      url: '_next/static/2SSJQ8xA7pCdPou9DE5nM/pages/polityka-prywatnosci.js',
      revision: '639a8e47a712ceb1207fe8344a343712',
    },
    {
      url:
        '_next/static/chunks/151dc2e715a71341f1fbd6c0bf87938fcb1e825d.92e6efea81337d5c96be.js',
      revision: '84f53140c0d00ddf16743e1bba50ecb7',
    },
    {
      url:
        '_next/static/chunks/46f0cb06f1226f4f0c11bd8c6ef0feca8853fe8f.150e1c75b8de972c8503.js',
      revision: '65fad69b5056659766430df52ef9ad9c',
    },
    {
      url: '_next/static/chunks/9.322ee42512093bdafc6a.js',
      revision: '1d18bf9d218d6c52ad05a3c224993b35',
    },
    {
      url: '_next/static/chunks/a9a7754c.61fab41c0bdf4d75a15f.js',
      revision: '4554bd6ba82d4bb9ad8374b11ecd013b',
    },
    {
      url:
        '_next/static/chunks/c5f1a1b51618036a282f68c649a5f8b9a18cc855.1ff32eb65382e951be0c.js',
      revision: 'f963f843a7226d91d420547ffc76414d',
    },
    {
      url: '_next/static/chunks/cb1608f2.008eddeaf40e9f5adefa.js',
      revision: 'e4b2c71404782e4f6a49bf813ad8a69c',
    },
    {
      url:
        '_next/static/chunks/ef3f4c7990ac1e71aa26c33a5355f232536fc4c7.30079f30a314b51759af.js',
      revision: '41c50ab6403e776ca3325551a42c95eb',
    },
    {
      url: '_next/static/chunks/framework.4627232918288795dbae.js',
      revision: '77ff9d51c8b9888d08d8f85c9ab360d0',
    },
    {
      url: '_next/static/chunks/styles.8405695371fed28f0240.js',
      revision: '875d1853ed0379d91b704293824927b5',
    },
    {
      url: '_next/static/css/styles.973b3144.chunk.css',
      revision: '1c705845fc6b811a952e35520de38873',
    },
    {
      url: '_next/static/runtime/main-91c04f9a7557b303a5d5.js',
      revision: '51089c4a134e9ff45bbaf2e8af73c38a',
    },
    {
      url: '_next/static/runtime/polyfills-0a85e0abcccdcf774664.js',
      revision: '3ea6f90f2ac2f068d2bf603dd3a9b49a',
    },
    {
      url: '_next/static/runtime/webpack-52be583c4c6194004129.js',
      revision: '7972eeb21c251dde73673cf02fd21349',
    },
  ]),
  A(I),
  (function(e, s, a) {
    let c;
    if ('string' == typeof e) {
      const t = new URL(e, location.href);
      c = new n(({ url: e }) => e.href === t.href, s, a);
    } else if (e instanceof RegExp) c = new i(e, s, a);
    else if ('function' == typeof e) c = new n(e, s, a);
    else {
      if (!(e instanceof n))
        throw new t('unsupported-route-type', {
          moduleName: 'workbox-routing',
          funcName: 'registerRoute',
          paramName: 'capture',
        });
      c = e;
    }
    o().registerRoute(c);
  })(
    /^https?.*/,
    new (class {
      constructor(e = {}) {
        if (((this.m = f(e.cacheName)), e.plugins)) {
          let t = e.plugins.some((e) => !!e.cacheWillUpdate);
          this.D = t ? e.plugins : [S, ...e.plugins];
        } else this.D = [S];
        (this.N = e.networkTimeoutSeconds || 0),
          (this.C = e.fetchOptions),
          (this.A = e.matchOptions);
      }
      async handle({ event: e, request: s }) {
        const n = [];
        'string' == typeof s && (s = new Request(s));
        const i = [];
        let a;
        if (this.N) {
          const { id: t, promise: c } = this.T({
            request: s,
            event: e,
            logs: n,
          });
          (a = t), i.push(c);
        }
        const c = this.K({ timeoutId: a, request: s, event: e, logs: n });
        i.push(c);
        let r = await Promise.race(i);
        if ((r || (r = await c), !r))
          throw new t('no-response', { url: s.url });
        return r;
      }
      T({ request: e, logs: t, event: s }) {
        let n;
        return {
          promise: new Promise((t) => {
            n = setTimeout(async () => {
              t(await this.O({ request: e, event: s }));
            }, 1e3 * this.N);
          }),
          id: n,
        };
      }
      async K({ timeoutId: e, request: t, logs: s, event: n }) {
        let i, a;
        try {
          a = await L({
            request: t,
            event: n,
            fetchOptions: this.C,
            plugins: this.D,
          });
        } catch (e) {
          i = e;
        }
        if ((e && clearTimeout(e), i || !a))
          a = await this.O({ request: t, event: n });
        else {
          const e = a.clone(),
            s = U.put({
              cacheName: this.m,
              request: t,
              response: e,
              event: n,
              plugins: this.D,
            });
          if (n)
            try {
              n.waitUntil(s);
            } catch (e) {}
        }
        return a;
      }
      O({ event: e, request: t }) {
        return U.match({
          cacheName: this.m,
          request: t,
          event: e,
          matchOptions: this.A,
          plugins: this.D,
        });
      }
    })({
      cacheName: 'offlineCache',
      plugins: [
        new (class {
          constructor(e = {}) {
            var t;
            (this.cachedResponseWillBeUsed = async ({
              event: e,
              request: t,
              cacheName: s,
              cachedResponse: n,
            }) => {
              if (!n) return null;
              let i = this.I(n);
              const a = this.J(s);
              d(a.expireEntries());
              const c = a.updateTimestamp(t.url);
              if (e)
                try {
                  e.waitUntil(c);
                } catch (e) {}
              return i ? n : null;
            }),
              (this.cacheDidUpdate = async ({ cacheName: e, request: t }) => {
                const s = this.J(e);
                await s.updateTimestamp(t.url), await s.expireEntries();
              }),
              (this.W = e),
              (this.L = e.maxAgeSeconds),
              (this.B = new Map()),
              e.purgeOnQuotaError &&
                ((t = () => this.deleteCacheAndMetadata()), p.add(t));
          }
          J(e) {
            if (e === f()) throw new t('expire-custom-caches-only');
            let s = this.B.get(e);
            return s || ((s = new b(e, this.W)), this.B.set(e, s)), s;
          }
          I(e) {
            if (!this.L) return !0;
            const t = this.F(e);
            return null === t || t >= Date.now() - 1e3 * this.L;
          }
          F(e) {
            if (!e.headers.has('date')) return null;
            const t = e.headers.get('date'),
              s = new Date(t).getTime();
            return isNaN(s) ? null : s;
          }
          async deleteCacheAndMetadata() {
            for (const [e, t] of this.B)
              await self.caches.delete(e), await t.delete();
            this.B = new Map();
          }
        })({ maxEntries: 200, purgeOnQuotaError: !0 }),
      ],
    }),
    'GET',
  );
