import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AerialPage } from './aerial.page';

const routes: Routes = [
  {
    path: '',
    component: AerialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AerialPageRoutingModule {}
