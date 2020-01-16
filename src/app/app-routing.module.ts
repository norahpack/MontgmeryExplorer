import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'first',
    loadChildren: () => import('./locations/first/first.module').then( m => m.FirstPageModule)
  },
  {
    path: 'second',
    loadChildren: () => import('./locations/second/second.module').then( m => m.SecondPageModule)
  },
  {
    path: 'third',
    loadChildren: () => import('./locations/third/third.module').then( m => m.ThirdPageModule)
  },
  {
    path: 'fourth',
    loadChildren: () => import('./locations/fourth/fourth.module').then( m => m.FourthPageModule)
  },
  {
    path: 'firstp1',
    loadChildren: () => import('./locations/first/slideshow1/firstp1/firstp1.module').then( m=> m.Firstp1PageModule)
  },
  {
    path: 'firstp2',
    loadChildren: () => import('./locations/first/slideshow1/firstp2/firstp2.module').then( m=> m.Firstp2PageModule)
  },
  {
    path: 'firstp3',
    loadChildren: () => import('./locations/first/slideshow1/firstp3/firstp3.module').then( m=> m.Firstp3PageModule)
  },
  {
    path: 'firstp4',
    loadChildren: () => import('./locations/first/slideshow1/firstp4/firstp4.module').then( m=> m.Firstp4PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
