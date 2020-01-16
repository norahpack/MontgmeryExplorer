import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Secondp1Page } from './secondp1.page';

const routes: Routes = [
  {
    path: '',
    component: Secondp1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Secondp1PageRoutingModule {}
