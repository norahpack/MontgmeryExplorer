import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { July4Page } from './july4.page';

const routes: Routes = [
  {
    path: '',
    component: July4Page
  },
  {
    path: 'july4trivia',
    loadChildren: () => import('./july4trivia/july4trivia.module').then( m => m.July4triviaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class July4PageRoutingModule {}
