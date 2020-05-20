import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirePage } from './fire.page';

const routes: Routes = [
  {
    path: '',
    component: FirePage
  },
  {
    path: 'firetrivia',
    loadChildren: () => import('./firetrivia/firetrivia.module').then( m => m.FiretriviaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirePageRoutingModule {}
