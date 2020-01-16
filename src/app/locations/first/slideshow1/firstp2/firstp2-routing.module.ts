import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Firstp2Page } from './firstp2.page';

const routes: Routes = [
  {
    path: '',
    component: Firstp2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Firstp2PageRoutingModule {}
