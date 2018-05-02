![lighthouse](https://github.com/GabrielFerreir/pwa-smn-ui/blob/master/lighthouse.png)



### NotificationClick

Para ativar os clicks na notificaço adicione o codigo abaixo no arquivo "node_modules/@angular/service-worker/ngsw-worker.js"
apos o this.scope.addEventListener('push', (event) 

    this.scope.addEventListener('notificationclick', (event) => {
        console.log('[Service Worker] Notification click Received. event:%s', event);
        event.notification.close();
        if (clients.openWindow && event.notification.data.url) {
            event.waitUntil(clients.openWindow(event.notification.data.url));
        }
    });
