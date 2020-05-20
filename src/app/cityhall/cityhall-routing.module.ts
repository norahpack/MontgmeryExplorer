import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityhallPage } from './cityhall.page';

const routes: Routes = [
  {
    path: '',
    component: CityhallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityhallPageRoutingModule {}
