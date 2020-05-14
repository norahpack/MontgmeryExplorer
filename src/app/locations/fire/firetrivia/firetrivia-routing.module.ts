import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiretriviaPage } from './firetrivia.page';

const routes: Routes = [
  {
    path: '',
    component: FiretriviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiretriviaPageRoutingModule {}
