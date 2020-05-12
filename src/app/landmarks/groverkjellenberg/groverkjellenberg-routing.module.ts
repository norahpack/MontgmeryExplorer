import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroverkjellenbergPage } from './groverkjellenberg.page';

const routes: Routes = [
  {
    path: '',
    component: GroverkjellenbergPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroverkjellenbergPageRoutingModule {}
