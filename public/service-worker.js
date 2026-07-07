const CACHE_NAME = "Outlet-v1";

const urls = [
    "/",
    "/index.html",
    "/products.html",
    "/cart.html",
    "/offline.html",
    "/css/style.css",
    "/js/app.js"
];

self.addEventListener("install",(event)=>{

event.waitUntil(

caches.open(CACHE_NAME)

.then(cache=>{

return cache.addAll(urls);

})

);

});

self.addEventListener("fetch",(event)=>{

event.respondWith(

caches.match(event.request)

.then(response=>{

return response || fetch(event.request);

})

);

});