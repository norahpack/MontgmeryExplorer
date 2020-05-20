import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartriviaPage } from './cartrivia.page';

const routes: Routes = [
  {
    path: '',
    component: CartriviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartriviaPageRoutingModule {}
