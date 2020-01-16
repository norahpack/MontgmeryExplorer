import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FourthPage } from './fourth.page';

const routes: Routes = [
  {
    path: '',
    component: FourthPage
  },
  {
    path: 'fourthp1',
    loadChildren: () => import('./slideshow4/fourthp1/fourthp1.module').then( m => m.Fourthp1PageModule)
  },
  {
    path: 'fourthp2',
    loadChildren: () => import('./slideshow4/fourthp2/fourthp2.module').then( m => m.Fourthp2PageModule)
  },
  {
    path: 'fourthp3',
    loadChildren: () => import('./slideshow4/fourthp3/fourthp3.module').then( m => m.Fourthp3PageModule)
  },
  {
    path: 'fourthp4',
    loadChildren: () => import('./slideshow4/fourthp4/fourthp4.module').then( m => m.Fourthp4PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FourthPageRoutingModule {}
