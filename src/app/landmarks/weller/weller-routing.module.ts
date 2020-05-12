import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WellerPage } from './weller.page';

const routes: Routes = [
  {
    path: '',
    component: WellerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WellerPageRoutingModule {}
