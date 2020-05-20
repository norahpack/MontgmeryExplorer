import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaintriviaPage } from './raintrivia.page';

const routes: Routes = [
  {
    path: '',
    component: RaintriviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaintriviaPageRoutingModule {}
