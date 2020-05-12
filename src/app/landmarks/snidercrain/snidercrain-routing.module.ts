import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnidercrainPage } from './snidercrain.page';

const routes: Routes = [
  {
    path: '',
    component: SnidercrainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnidercrainPageRoutingModule {}
