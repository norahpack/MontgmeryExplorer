import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrainconklinPage } from './crainconklin.page';

const routes: Routes = [
  {
    path: '',
    component: CrainconklinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrainconklinPageRoutingModule {}
