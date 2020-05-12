import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasonPage } from './mason.page';

const routes: Routes = [
  {
    path: '',
    component: MasonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasonPageRoutingModule {}
