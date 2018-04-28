import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NotificacoesComponent } from './notificacoes.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [NotificacoesComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NotificacoesModule { }
