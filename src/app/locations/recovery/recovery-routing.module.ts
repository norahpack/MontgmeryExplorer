import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecoveryPage } from './recovery.page';

const routes: Routes = [
  {
    path: '',
    component: RecoveryPage
  },
  {
    path: 'recoverytrivia',
    loadChildren: () => import('./recoverytrivia/recoverytrivia.module').then( m => m.RecoverytriviaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecoveryPageRoutingModule {}
