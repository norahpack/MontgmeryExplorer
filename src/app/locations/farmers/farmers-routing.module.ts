import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmersPage } from './farmers.page';

const routes: Routes = [
  {
    path: '',
    component: FarmersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmersPageRoutingModule {}
