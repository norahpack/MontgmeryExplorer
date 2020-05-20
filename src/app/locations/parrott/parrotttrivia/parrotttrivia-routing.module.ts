import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParrotttriviaPage } from './parrotttrivia.page';

const routes: Routes = [
  {
    path: '',
    component: ParrotttriviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParrotttriviaPageRoutingModule {}
