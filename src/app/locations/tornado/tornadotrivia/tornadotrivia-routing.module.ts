import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TornadotriviaPage } from './tornadotrivia.page';

const routes: Routes = [
  {
    path: '',
    component: TornadotriviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TornadotriviaPageRoutingModule {}
