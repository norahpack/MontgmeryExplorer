import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeadershiptriviaPage } from './leadershiptrivia.page';

const routes: Routes = [
  {
    path: '',
    component: LeadershiptriviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadershiptriviaPageRoutingModule {}
