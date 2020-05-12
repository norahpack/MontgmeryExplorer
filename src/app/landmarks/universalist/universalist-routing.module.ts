import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniversalistPage } from './universalist.page';

const routes: Routes = [
  {
    path: '',
    component: UniversalistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversalistPageRoutingModule {}
