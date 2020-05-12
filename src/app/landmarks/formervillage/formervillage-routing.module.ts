import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormervillagePage } from './formervillage.page';

const routes: Routes = [
  {
    path: '',
    component: FormervillagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormervillagePageRoutingModule {}
