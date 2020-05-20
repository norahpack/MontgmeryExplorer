import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoalbumPage } from './photoalbum.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoalbumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoalbumPageRoutingModule {}
