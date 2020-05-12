import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YostPage } from './yost.page';

const routes: Routes = [
  {
    path: '',
    component: YostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YostPageRoutingModule {}
