import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Secondp3Page } from './secondp3.page';

const routes: Routes = [
  {
    path: '',
    component: Secondp3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Secondp3PageRoutingModule {}
