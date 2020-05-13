import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParksandeventsPage } from './parksandevents.page';

const routes: Routes = [
  {
    path: '',
    component: ParksandeventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParksandeventsPageRoutingModule {}
