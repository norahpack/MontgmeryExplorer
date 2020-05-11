import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrashPage } from './crash.page';

const routes: Routes = [
  {
    path: '',
    component: CrashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrashPageRoutingModule {}
