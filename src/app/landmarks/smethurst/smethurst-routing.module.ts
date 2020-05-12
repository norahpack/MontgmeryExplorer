import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmethurstPage } from './smethurst.page';

const routes: Routes = [
  {
    path: '',
    component: SmethurstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmethurstPageRoutingModule {}
