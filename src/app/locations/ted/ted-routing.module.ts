import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TedPage } from './ted.page';

const routes: Routes = [
  {
    path: '',
    component: TedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TedPageRoutingModule {}
