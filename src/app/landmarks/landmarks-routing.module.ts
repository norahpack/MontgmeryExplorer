import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandmarksPage } from './landmarks.page';

const routes: Routes = [
  {
    path: '',
    component: LandmarksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandmarksPageRoutingModule {}
