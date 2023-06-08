const staticCacheName = "site-v0.001";
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/script.js",
    "https://cdn.jsdelivr.net/npm/remixicon@3.3.0/fonts/remixicon.css",
    "/index.html?#",
    "/images/app-development.png",
    "/images/coding.png",
    "/images/dashboard-img.jpg",
    "/images/ecommerce-img.jpg",
    "/images/weather-app-img.jpg"
];

this.addEventListener("install",evt => {
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            cache.addAll(assets);
        })
    )
})

this.addEventListener("activate",evt => {
    evt.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(keys
                .filter(key => key != staticCacheName)
                .map(key => caches.delete(key))
                )
        })
    )
})

this.addEventListener("fetch",evt => {
    evt.respondWith(
        caches.match(evt.request)
          .then(cacheRes => cacheRes || fetch(evt.request))
    )
})