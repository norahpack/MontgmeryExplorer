import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CristPage } from './crist.page';

const routes: Routes = [
  {
    path: '',
    component: CristPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CristPageRoutingModule {}
