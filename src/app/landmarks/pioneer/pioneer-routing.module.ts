import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PioneerPage } from './pioneer.page';

const routes: Routes = [
  {
    path: '',
    component: PioneerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PioneerPageRoutingModule {}
