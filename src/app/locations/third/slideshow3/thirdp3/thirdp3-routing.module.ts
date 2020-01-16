import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Thirdp3Page } from './thirdp3.page';

const routes: Routes = [
  {
    path: '',
    component: Thirdp3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Thirdp3PageRoutingModule {}
