import {Routes} from '@angular/router';
import {SobreComponent} from './sobre.component';

export const SOBRE_ROUTES: Routes = [
  {
    path: 'sobre',
    component: SobreComponent,
    data: { animation: 'sobre' }
  }
];
