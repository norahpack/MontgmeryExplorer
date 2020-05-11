import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SagePage } from './sage.page';

const routes: Routes = [
  {
    path: '',
    component: SagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SagePageRoutingModule {}
