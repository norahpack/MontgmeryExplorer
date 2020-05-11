import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GatewayPage } from './gateway.page';

const routes: Routes = [
  {
    path: '',
    component: GatewayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GatewayPageRoutingModule {}
