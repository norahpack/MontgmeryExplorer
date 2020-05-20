import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArttriviaPage } from './arttrivia.page';

const routes: Routes = [
  {
    path: '',
    component: ArttriviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArttriviaPageRoutingModule {}
