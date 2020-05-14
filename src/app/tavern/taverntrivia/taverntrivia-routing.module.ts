import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaverntriviaPage } from './taverntrivia.page';

const routes: Routes = [
  {
    path: '',
    component: TaverntriviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaverntriviaPageRoutingModule {}
