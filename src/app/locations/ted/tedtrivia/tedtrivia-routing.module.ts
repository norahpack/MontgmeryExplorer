import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TedtriviaPage } from './tedtrivia.page';

const routes: Routes = [
  {
    path: '',
    component: TedtriviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TedtriviaPageRoutingModule {}
