import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StixdurbrowPage } from './stixdurbrow.page';

const routes: Routes = [
  {
    path: '',
    component: StixdurbrowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StixdurbrowPageRoutingModule {}
