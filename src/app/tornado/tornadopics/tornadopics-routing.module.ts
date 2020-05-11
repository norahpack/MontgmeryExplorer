import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TornadopicsPage } from './tornadopics.page';

const routes: Routes = [
  {
    path: '',
    component: TornadopicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TornadopicsPageRoutingModule {}
