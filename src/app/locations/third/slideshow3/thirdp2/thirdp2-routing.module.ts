import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Thirdp2Page } from './thirdp2.page';

const routes: Routes = [
  {
    path: '',
    component: Thirdp2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Thirdp2PageRoutingModule {}
