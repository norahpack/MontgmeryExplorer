import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrashtriviaPage } from './crashtrivia.page';

const routes: Routes = [
  {
    path: '',
    component: CrashtriviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrashtriviaPageRoutingModule {}
