
var staticCacheName = 'mws-restaurant-v1';

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(staticCacheName).then(function(cache) {
			return cache.addAll([
				'/',
				'/restaurant.html',
				'/css/styles.css',
				'/data/restaurants.json',
				'/js/dbhelper.js',
				'/js/main.js',
				'/js/restaurant_info.js'
			]);
		})
	);
});

self.addEventListener('fetch', function(e) {
	e.respondWith(
		caches.match(e.request).then(function(resp) {
			if (resp) return resp;
			return fetch(e.request);
		})
	);
});
