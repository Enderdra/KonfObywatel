self.addEventListener('install', (e) => {
    console.log('[Service Worker] Zainstalowano');
});

self.addEventListener('fetch', (e) => {
    // Pusty fetch - wymagany przez telefony do instalacji PWA
});
