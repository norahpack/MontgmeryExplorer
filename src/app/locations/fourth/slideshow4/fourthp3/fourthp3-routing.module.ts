import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fourthp3Page } from './fourthp3.page';

const routes: Routes = [
  {
    path: '',
    component: Fourthp3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fourthp3PageRoutingModule {}
