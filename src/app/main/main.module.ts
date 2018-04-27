import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import { MainComponent } from './main.component';
import {SobreModule} from './sobre/sobre.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    SharedModule,
    SobreModule
  ],
  declarations: [MainComponent, HomeComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainModule { }
