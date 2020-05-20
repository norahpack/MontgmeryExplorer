import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RainPage } from './rain.page';

const routes: Routes = [
  {
    path: '',
    component: RainPage
  },
  {
    path: 'raintrivia',
    loadChildren: () => import('./raintrivia/raintrivia.module').then( m => m.RaintriviaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RainPageRoutingModule {}
