import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParrottPage } from './parrott.page';

const routes: Routes = [
  {
    path: '',
    component: ParrottPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParrottPageRoutingModule {}
