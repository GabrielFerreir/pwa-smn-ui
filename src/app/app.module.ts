import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import {SharedModule} from './shared.module';
import {AppRoutingModule} from './app-routing.module';
import {MainModule} from './main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
