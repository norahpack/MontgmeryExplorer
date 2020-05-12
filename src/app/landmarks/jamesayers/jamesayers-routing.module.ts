import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JamesayersPage } from './jamesayers.page';

const routes: Routes = [
  {
    path: '',
    component: JamesayersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JamesayersPageRoutingModule {}
