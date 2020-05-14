import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { July4triviaPage } from './july4trivia.page';

const routes: Routes = [
  {
    path: '',
    component: July4triviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class July4triviaPageRoutingModule {}
