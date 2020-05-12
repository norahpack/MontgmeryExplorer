import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PureoilPage } from './pureoil.page';

const routes: Routes = [
  {
    path: '',
    component: PureoilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PureoilPageRoutingModule {}
