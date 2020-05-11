import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeadershipPage } from './leadership.page';

const routes: Routes = [
  {
    path: '',
    component: LeadershipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadershipPageRoutingModule {}
