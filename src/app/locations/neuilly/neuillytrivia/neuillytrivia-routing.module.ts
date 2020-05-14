import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeuillytriviaPage } from './neuillytrivia.page';

const routes: Routes = [
  {
    path: '',
    component: NeuillytriviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeuillytriviaPageRoutingModule {}
