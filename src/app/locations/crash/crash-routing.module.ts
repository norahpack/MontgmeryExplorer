import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrashPage } from './crash.page';

const routes: Routes = [
  {
    path: '',
    component: CrashPage
  },
  {
    path: 'crashtrivia',
    loadChildren: () => import('./crashtrivia/crashtrivia.module').then( m => m.CrashtriviaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrashPageRoutingModule {}
