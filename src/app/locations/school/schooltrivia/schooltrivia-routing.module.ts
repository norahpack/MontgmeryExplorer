import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchooltriviaPage } from './schooltrivia.page';

const routes: Routes = [
  {
    path: '',
    component: SchooltriviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchooltriviaPageRoutingModule {}
