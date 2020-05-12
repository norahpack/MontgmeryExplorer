import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CraineberhardPage } from './craineberhard.page';

const routes: Routes = [
  {
    path: '',
    component: CraineberhardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CraineberhardPageRoutingModule {}
