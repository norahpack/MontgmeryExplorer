import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GatewaytriviaPage } from './gatewaytrivia.page';

const routes: Routes = [
  {
    path: '',
    component: GatewaytriviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GatewaytriviaPageRoutingModule {}
