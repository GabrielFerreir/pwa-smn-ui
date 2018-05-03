import {Routes} from '@angular/router';
import {SOBRE_ROUTES} from './sobre/sobre-routing.module';
import {MainComponent} from './main.component';
import {HOME_ROUTES} from './home/home-routing.module';
import { NOTIFICACOES_ROUTES } from './notificacoes/notificacoes-routing.module';
import {SHARE_ROUTES} from './share/share-routing.module';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      ...HOME_ROUTES,
      ...SOBRE_ROUTES,
      ...NOTIFICACOES_ROUTES,
      ...SHARE_ROUTES
    ]
  }
];
