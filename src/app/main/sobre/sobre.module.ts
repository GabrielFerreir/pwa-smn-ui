import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { SobreComponent } from './sobre.component';
import {SharedModule} from '../../shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [SobreComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SobreModule { }
