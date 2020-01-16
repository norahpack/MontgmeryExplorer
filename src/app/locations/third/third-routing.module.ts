import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThirdPage } from './third.page';

const routes: Routes = [
  {
    path: '',
    component: ThirdPage
  },
  {
    path: 'thirdp1',
    loadChildren: () => import('./slideshow3/thirdp1/thirdp1.module').then( m => m.Thirdp1PageModule)
  },
  {
    path: 'thirdp2',
    loadChildren: () => import('./slideshow3/thirdp2/thirdp2.module').then( m => m.Thirdp2PageModule)
  },
  {
    path: 'thirdp3',
    loadChildren: () => import('./slideshow3/thirdp3/thirdp3.module').then( m => m.Thirdp3PageModule)
  },
  {
    path: 'thirdp4',
    loadChildren: () => import('./slideshow3/thirdp4/thirdp4.module').then( m => m.Thirdp4PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdPageRoutingModule {}
