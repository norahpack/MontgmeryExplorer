import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fourthp4Page } from './fourthp4.page';

const routes: Routes = [
  {
    path: '',
    component: Fourthp4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fourthp4PageRoutingModule {}
