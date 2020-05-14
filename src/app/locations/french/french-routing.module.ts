import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrenchPage } from './french.page';

const routes: Routes = [
  {
    path: '',
    component: FrenchPage
  },
  {
    path: 'frenchtrivia',
    loadChildren: () => import('./frenchtrivia/frenchtrivia.module').then( m => m.FrenchtriviaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrenchPageRoutingModule {}
