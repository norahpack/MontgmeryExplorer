import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoccerPage } from './soccer.page';

const routes: Routes = [
  {
    path: '',
    component: SoccerPage
  },
  {
    path: 'soccertrivia',
    loadChildren: () => import('./soccertrivia/soccertrivia.module').then( m => m.SoccertriviaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoccerPageRoutingModule {}
