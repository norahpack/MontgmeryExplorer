import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { July4Page } from './july4.page';

const routes: Routes = [
  {
    path: '',
    component: July4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class July4PageRoutingModule {}
