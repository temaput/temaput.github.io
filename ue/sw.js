self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("universalextras-static-v1").then(function(cache) {
      return cache.addAll([
        "/ue/",
        "/ue/index.html",
        "/ue/bundle.web.js"
        // etc
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
