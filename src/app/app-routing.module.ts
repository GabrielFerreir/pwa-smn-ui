import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MAIN_ROUTES} from './main/main-routing.module';

const routes: Routes = [
  ...MAIN_ROUTES
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
