import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeuillyPage } from './neuilly.page';

const routes: Routes = [
  {
    path: '',
    component: NeuillyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeuillyPageRoutingModule {}
