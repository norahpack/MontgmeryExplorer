import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Firstp1Page } from './firstp1.page';

const routes: Routes = [
  {
    path: '',
    component: Firstp1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Firstp1PageRoutingModule {}
