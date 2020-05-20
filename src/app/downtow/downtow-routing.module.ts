import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DowntowPage } from './downtow.page';

const routes: Routes = [
  {
    path: '',
    component: DowntowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DowntowPageRoutingModule {}
