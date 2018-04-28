import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.component.html',
  styleUrls: ['./notificacoes.component.scss']
})
export class NotificacoesComponent implements OnInit {

  VAPID_PUBLIC_KEY: string;

  constructor(private swPush: SwPush, private http: Http) {
    this.VAPID_PUBLIC_KEY = 'BAjDL342V7SFFfe5iEzj54Lg2di3SJaUMyRqf8XdrFwO4p7D2pxnqDXj3i8s6SFeH6QIzTYsmJc_q8vmjnVK3EA';
  }

  ngOnInit() {
  }

  subscribeToPush() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(pushSubscription => {
        console.log(pushSubscription);
        this.submit(pushSubscription);
      })
      .catch(err => {
        console.error(err);
      })
  }

  unsubscribeFromPush() {
    this.swPush.subscription
      .subscribe(pushSubscription => {
        pushSubscription.unsubscribe()
        .then(success => {
          console.log('Unsubscription!', success)
        })
        .catch(err => {
          console.log('Error', err)
        })
      });
  }

  submit(req) {
    const body = {
      push: req
    }
    console.log(environment.apiNotification + 'push');
    const res = this.http.post(environment.apiNotification + 'push', body)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }


}
