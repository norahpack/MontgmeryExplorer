import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlowerPage } from './flower.page';

const routes: Routes = [
  {
    path: '',
    component: FlowerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlowerPageRoutingModule {}
