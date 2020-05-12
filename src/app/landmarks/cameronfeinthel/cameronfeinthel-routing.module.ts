import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CameronfeinthelPage } from './cameronfeinthel.page';

const routes: Routes = [
  {
    path: '',
    component: CameronfeinthelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CameronfeinthelPageRoutingModule {}
