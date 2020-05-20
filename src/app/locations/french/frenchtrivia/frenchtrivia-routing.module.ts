import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrenchtriviaPage } from './frenchtrivia.page';

const routes: Routes = [
  {
    path: '',
    component: FrenchtriviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrenchtriviaPageRoutingModule {}
