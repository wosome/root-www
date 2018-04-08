import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Page404Component} from './root/page-404/page-404.component';

const root = 'app/www/www.module#WWWModule';
const auth = 'app/auth/auth.module#AuthModule';

const routes: Routes = [
  { path: '',   loadChildren: root },
  { path: 'auth',   loadChildren: auth },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
