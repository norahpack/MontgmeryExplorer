import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarPage } from './car.page';

const routes: Routes = [
  {
    path: '',
    component: CarPage
  },
  {
    path: 'cartrivia',
    loadChildren: () => import('./cartrivia/cartrivia.module').then( m => m.CartriviaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarPageRoutingModule {}
