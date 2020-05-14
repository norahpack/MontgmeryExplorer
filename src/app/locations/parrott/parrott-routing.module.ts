import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParrottPage } from './parrott.page';

const routes: Routes = [
  {
    path: '',
    component: ParrottPage
  },
  {
    path: 'parrotttrivia',
    loadChildren: () => import('./parrotttrivia/parrotttrivia.module').then( m => m.ParrotttriviaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParrottPageRoutingModule {}
