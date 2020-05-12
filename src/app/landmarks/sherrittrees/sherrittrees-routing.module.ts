import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SherrittreesPage } from './sherrittrees.page';

const routes: Routes = [
  {
    path: '',
    component: SherrittreesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SherrittreesPageRoutingModule {}
