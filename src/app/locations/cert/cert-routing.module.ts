import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertPage } from './cert.page';

const routes: Routes = [
  {
    path: '',
    component: CertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertPageRoutingModule {}
