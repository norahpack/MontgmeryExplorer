import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MayorsPage } from './mayors.page';

const routes: Routes = [
  {
    path: '',
    component: MayorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MayorsPageRoutingModule {}
