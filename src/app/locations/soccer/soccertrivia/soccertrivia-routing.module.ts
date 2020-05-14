import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoccertriviaPage } from './soccertrivia.page';

const routes: Routes = [
  {
    path: '',
    component: SoccertriviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoccertriviaPageRoutingModule {}
