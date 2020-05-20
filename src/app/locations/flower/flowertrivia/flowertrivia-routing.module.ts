import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlowertriviaPage } from './flowertrivia.page';

const routes: Routes = [
  {
    path: '',
    component: FlowertriviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlowertriviaPageRoutingModule {}
