import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SagetriviaPage } from './sagetrivia.page';

const routes: Routes = [
  {
    path: '',
    component: SagetriviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SagetriviaPageRoutingModule {}
