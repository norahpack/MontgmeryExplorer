import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtPage } from './art.page';

const routes: Routes = [
  {
    path: '',
    component: ArtPage
  },
  {
    path: 'arttrivia',
    loadChildren: () => import('./arttrivia/arttrivia.module').then( m => m.ArttriviaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtPageRoutingModule {}
