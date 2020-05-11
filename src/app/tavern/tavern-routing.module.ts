import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TavernPage } from './tavern.page';

const routes: Routes = [
  {
    path: '',
    component: TavernPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TavernPageRoutingModule {}
