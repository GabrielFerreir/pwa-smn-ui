import {Routes} from '@angular/router';
import { NotificacoesComponent } from './notificacoes.component';

export const NOTIFICACOES_ROUTES: Routes = [
  {
    path: 'notificacoes',
    component: NotificacoesComponent,
    data: { animation: 'notificacoes' }
  }
];
