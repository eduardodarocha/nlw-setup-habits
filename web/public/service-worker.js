console.log('Service Worker Loaded...');
self.addEventListener('push', function(event) {
const body = event.data?.text() ?? ""

  event.waitUntil(
    self.registration.showNotification('Habits', {
      body,
      icon: 'https://cdn-icons-png.flaticon.com/512/9352/9352344.png',
    }))
})