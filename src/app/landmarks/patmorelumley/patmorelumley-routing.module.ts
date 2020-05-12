import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatmorelumleyPage } from './patmorelumley.page';

const routes: Routes = [
  {
    path: '',
    component: PatmorelumleyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatmorelumleyPageRoutingModule {}
