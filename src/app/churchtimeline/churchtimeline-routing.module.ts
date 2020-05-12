import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChurchtimelinePage } from './churchtimeline.page';

const routes: Routes = [
  {
    path: '',
    component: ChurchtimelinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChurchtimelinePageRoutingModule {}
