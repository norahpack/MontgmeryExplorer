import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JohnsonmurdoughPage } from './johnsonmurdough.page';

const routes: Routes = [
  {
    path: '',
    component: JohnsonmurdoughPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JohnsonmurdoughPageRoutingModule {}
