import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmersPage } from './farmers.page';

const routes: Routes = [
  {
    path: '',
    component: FarmersPage
  },
  {
    path: 'farmerstrivia',
    loadChildren: () => import('./farmerstrivia/farmerstrivia.module').then( m => m.FarmerstriviaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmersPageRoutingModule {}
