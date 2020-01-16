import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Secondp4Page } from './secondp4.page';

const routes: Routes = [
  {
    path: '',
    component: Secondp4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Secondp4PageRoutingModule {}
