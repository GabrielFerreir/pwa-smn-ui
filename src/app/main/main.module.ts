import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import { MainComponent } from './main.component';
import {SobreModule} from './sobre/sobre.module';
import { HomeComponent } from './home/home.component';
import { NotificacoesModule } from './notificacoes/notificacoes.module';
import {ShareModule} from './share/share.module';

@NgModule({
  imports: [
    SharedModule,
    SobreModule,
    NotificacoesModule,
    ShareModule
  ],
  declarations: [MainComponent, HomeComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainModule { }
