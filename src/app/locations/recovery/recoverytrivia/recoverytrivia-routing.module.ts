import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecoverytriviaPage } from './recoverytrivia.page';

const routes: Routes = [
  {
    path: '',
    component: RecoverytriviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecoverytriviaPageRoutingModule {}
