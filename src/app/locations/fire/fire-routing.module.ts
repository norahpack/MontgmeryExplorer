import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirePage } from './fire.page';

const routes: Routes = [
  {
    path: '',
    component: FirePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirePageRoutingModule {}
