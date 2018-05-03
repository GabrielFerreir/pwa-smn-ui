import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { ShareComponent } from './share.component';
import {SharedModule} from '../../shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ShareComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ShareModule { }
