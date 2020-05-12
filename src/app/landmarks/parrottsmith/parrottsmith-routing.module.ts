import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParrottsmithPage } from './parrottsmith.page';

const routes: Routes = [
  {
    path: '',
    component: ParrottsmithPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParrottsmithPageRoutingModule {}
