import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolPage } from './school.page';

const routes: Routes = [
  {
    path: '',
    component: SchoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolPageRoutingModule {}
