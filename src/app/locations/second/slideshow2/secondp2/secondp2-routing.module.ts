import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Secondp2Page } from './secondp2.page';

const routes: Routes = [
  {
    path: '',
    component: Secondp2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Secondp2PageRoutingModule {}
