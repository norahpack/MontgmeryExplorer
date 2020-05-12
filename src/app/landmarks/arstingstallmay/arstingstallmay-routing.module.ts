import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArstingstallmayPage } from './arstingstallmay.page';

const routes: Routes = [
  {
    path: '',
    component: ArstingstallmayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArstingstallmayPageRoutingModule {}
