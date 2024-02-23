var cacheDynaLists = 'DynaLists-v1';

const assets = [
    "/",
    "/192x192.png",
    "/512x512.png",
    "/manifest.webmanifest",
    "../.eslintrc.cjs",
    "../index.html",
    "../package-lock.json",
    "../package.json",
    "../postcss.config.js",
    "../tailwind.config.js",
    "../vite.config.js",
    "../src/components/Button.jsx",
    "../src/components/Card.jsx",
    "../src/components/Header.jsx",
    "../src/components/Input.jsx",
    "../src/pages/InitialPage.jsx",
    "../src/utils/edit.js",
    "../src/utils/remove.js",
    "../src/App.css",
    "../src/App.jsx",
    "../src/index.css",
    "../src/main.jsx"
]


self.addEventListener('install', function (event) {

  event.waitUntil(

    caches.open(cacheDynaLists).then(function (cache) {

      return cache.addAll(assets);

    })

  )

});

self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(cacheDynaLists) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
});


self.addEventListener('fetch', function (event) {

  event.respondWith(

    caches.match(event.request).then(function (cachedResponse) {

      return cachedResponse || fetch(event.request);

    })

  );

});