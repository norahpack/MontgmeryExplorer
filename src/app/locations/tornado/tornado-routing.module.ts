import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TornadoPage } from './tornado.page';

const routes: Routes = [
  {
    path: '',
    component: TornadoPage
  },
  {
    path: 'tornadotrivia',
    loadChildren: () => import('./tornadotrivia/tornadotrivia.module').then( m => m.TornadotriviaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TornadoPageRoutingModule {}
