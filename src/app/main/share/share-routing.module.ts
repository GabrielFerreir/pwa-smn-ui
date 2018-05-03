import {Routes} from '@angular/router';
import {ShareComponent} from './share.component';

export const SHARE_ROUTES: Routes = [
  {
    path: 'share',
    component: ShareComponent,
    data: { animation: 'share' }
  }
];
