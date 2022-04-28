var cacheName = 'qpkencache';
var filesToCache = [
  '/',
  '/index.html',
  'https://qpkendra.com/cdn/css/fo.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.0/css/ionicons.min.css',
  'https://fonts.googleapis.com/css?family=Google+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700',
  'https://2.bp.blogspot.com/-2TR6vf8tXbQ/XrRpBrXtXwI/AAAAAAAAAps/xRcYUXWM4nsKKKj__vH5qGDiH1a1lBoEACK4BGAYYCw/s1600/New+Project+%281%29.png',
  'https://1.bp.blogspot.com/-uhKBRDhpGRw/X0i4QJUDRXI/AAAAAAAAAHI/NfffJZtcVqMld5o8Z4eSsGIZMRdSyVjBQCLcBGAsYHQ/s96/favicon.png',
  'https://1.bp.blogspot.com/-uhKBRDhpGRw/X0i4QJUDRXI/AAAAAAAAAHI/NfffJZtcVqMld5o8Z4eSsGIZMRdSyVjBQCLcBGAsYHQ/s32/favicon.png',
  'https://1.bp.blogspot.com/-uhKBRDhpGRw/X0i4QJUDRXI/AAAAAAAAAHI/NfffJZtcVqMld5o8Z4eSsGIZMRdSyVjBQCLcBGAsYHQ/s192/favicon.png',
  'https://1.bp.blogspot.com/-uhKBRDhpGRw/X0i4QJUDRXI/AAAAAAAAAHI/NfffJZtcVqMld5o8Z4eSsGIZMRdSyVjBQCLcBGAsYHQ/favicon.png',
  'https://1.bp.blogspot.com/-t0yhya0oGio/X0UyQHWZ0XI/AAAAAAAAAG4/IHfVnKuyMckPci4AqMbgKGtVWbMJfSVxwCLcBGAsYHQ/logo.png',
  'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js',
  'https://qpkendra.com/cdn/js/init.js',
  'https://qpkendra.com/cdn/css/mfm.css',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://qpkendra.com/cdn/js/fo.js',
  '/manifest.json',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
