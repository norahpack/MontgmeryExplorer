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
  {
    path: 'soccer',
    loadChildren: () => import('./locations/soccer/soccer.module').then( m => m.SoccerPageModule)
  },
  {
    path: 'tornado',
    loadChildren: () => import('./locations/tornado/tornado.module').then( m => m.TornadoPageModule)
  },
  {
    path: 'recovery',
    loadChildren: () => import('./locations/recovery/recovery.module').then( m => m.RecoveryPageModule)
  },
  {
    path: 'parrott',
    loadChildren: () => import('./locations/parrott/parrott.module').then( m => m.ParrottPageModule)
  },
  {
    path: 'ted',
    loadChildren: () => import('./locations/ted/ted.module').then( m => m.TedPageModule)
  },
  {
    path: 'school',
    loadChildren: () => import('./locations/school/school.module').then( m => m.SchoolPageModule)
  },
  {
    path: 'flower',
    loadChildren: () => import('./locations/flower/flower.module').then( m => m.FlowerPageModule)
  },
  {
    path: 'art',
    loadChildren: () => import('./locations/art/art.module').then( m => m.ArtPageModule)
  },
  {
    path: 'car',
    loadChildren: () => import('./locations/car/car.module').then( m => m.CarPageModule)
  },
  {
    path: 'crash',
    loadChildren: () => import('./locations/crash/crash.module').then( m => m.CrashPageModule)
  },
  {
    path: 'leadership',
    loadChildren: () => import('./locations/leadership/leadership.module').then( m => m.LeadershipPageModule)
  },
  {
    path: 'neuilly',
    loadChildren: () => import('./locations/neuilly/neuilly.module').then( m => m.NeuillyPageModule)
  },
  {
    path: 'farmers',
    loadChildren: () => import('./locations/farmers/farmers.module').then( m => m.FarmersPageModule)
  },
  {
    path: 'fire',
    loadChildren: () => import('./locations/fire/fire.module').then( m => m.FirePageModule)
  },
  {
    path: 'cert',
    loadChildren: () => import('./locations/cert/cert.module').then( m => m.CertPageModule)
  },
  {
    path: 'gateway',
    loadChildren: () => import('./locations/gateway/gateway.module').then( m => m.GatewayPageModule)
  },
  {
    path: 'french',
    loadChildren: () => import('./locations/french/french.module').then( m => m.FrenchPageModule)
  },
  {
    path: 'july4',
    loadChildren: () => import('./locations/july4/july4.module').then( m => m.July4PageModule)
  },
  {
    path: 'rain',
    loadChildren: () => import('./locations/rain/rain.module').then( m => m.RainPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
