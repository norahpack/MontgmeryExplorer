import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Firstp3Page } from './firstp3.page';

const routes: Routes = [
  {
    path: '',
    component: Firstp3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Firstp3PageRoutingModule {}
