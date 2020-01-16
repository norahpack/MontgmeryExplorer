import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondPage } from './second.page';

const routes: Routes = [
  {
    path: '',
    component: SecondPage
  },
  {
    path: 'secondp1',
    loadChildren: () => import('./slideshow2/secondp1/secondp1.module').then( m => m.Secondp1PageModule)
  },
  {
    path: 'secondp2',
    loadChildren: () => import('./slideshow2/secondp2/secondp2.module').then( m => m.Secondp2PageModule)
  },
  {
    path: 'secondp3',
    loadChildren: () => import('./slideshow2/secondp3/secondp3.module').then( m => m.Secondp3PageModule)
  },
  {
    path: 'secondp4',
    loadChildren: () => import('./slideshow2/secondp4/secondp4.module').then( m => m.Secondp4PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondPageRoutingModule {}
