import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstPage } from './first.page';

const routes: Routes = [
  {
    path: '',
    component: FirstPage
  },
  {
    path: 'firstp1',
    loadChildren: () => import('./slideshow1/firstp1/firstp1.module').then( m => m.Firstp1PageModule)
  },
  {
    path: 'firstp2',
    loadChildren: () => import('./slideshow1/firstp2/firstp2.module').then( m => m.Firstp2PageModule)
  },
  {
    path: 'firstp3',
    loadChildren: () => import('./slideshow1/firstp3/firstp3.module').then( m => m.Firstp3PageModule)
  },
  {
    path: 'firstp4',
    loadChildren: () => import('./slideshow1/firstp4/firstp4.module').then( m => m.Firstp4PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstPageRoutingModule {}
