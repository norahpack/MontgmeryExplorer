import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Thirdp1Page } from './thirdp1.page';

const routes: Routes = [
  {
    path: '',
    component: Thirdp1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Thirdp1PageRoutingModule {}
