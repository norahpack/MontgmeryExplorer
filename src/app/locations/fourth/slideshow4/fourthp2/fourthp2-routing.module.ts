import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fourthp2Page } from './fourthp2.page';

const routes: Routes = [
  {
    path: '',
    component: Fourthp2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fourthp2PageRoutingModule {}
