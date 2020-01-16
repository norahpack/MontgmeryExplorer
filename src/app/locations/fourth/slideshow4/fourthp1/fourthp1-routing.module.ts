import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fourthp1Page } from './fourthp1.page';

const routes: Routes = [
  {
    path: '',
    component: Fourthp1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fourthp1PageRoutingModule {}
