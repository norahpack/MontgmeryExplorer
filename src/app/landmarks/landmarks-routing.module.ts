import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandmarksPage } from './landmarks.page';

const routes: Routes = [
  {
    path: '',
    component: LandmarksPage
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'arstingstallmay',
    loadChildren: () => import('./arstingstallmay/arstingstallmay.module').then( m => m.ArstingstallmayPageModule)
  },
  {
    path: 'jamesayers',
    loadChildren: () => import('./jamesayers/jamesayers.module').then( m => m.JamesayersPageModule)
  },
  {
    path: 'bell',
    loadChildren: () => import('./bell/bell.module').then( m => m.BellPageModule)
  },
  {
    path: 'blairbarker',
    loadChildren: () => import('./blairbarker/blairbarker.module').then( m => m.BlairbarkerPageModule)
  },
  {
    path: 'cameronfeinthel',
    loadChildren: () => import('./cameronfeinthel/cameronfeinthel.module').then( m => m.CameronfeinthelPageModule)
  },
  {
    path: 'craineberhard',
    loadChildren: () => import('./craineberhard/craineberhard.module').then( m => m.CraineberhardPageModule)
  },
  {
    path: 'jonathancrain',
    loadChildren: () => import('./jonathancrain/jonathancrain.module').then( m => m.JonathancrainPageModule)
  },
  {
    path: 'crainconklin',
    loadChildren: () => import('./crainconklin/crainconklin.module').then( m => m.CrainconklinPageModule)
  },
  {
    path: 'crist',
    loadChildren: () => import('./crist/crist.module').then( m => m.CristPageModule)
  },
  {
    path: 'formervillage',
    loadChildren: () => import('./formervillage/formervillage.module').then( m => m.FormervillagePageModule)
  },
  {
    path: 'groverkjellenberg',
    loadChildren: () => import('./groverkjellenberg/groverkjellenberg.module').then( m => m.GroverkjellenbergPageModule)
  },
  {
    path: 'hoffman',
    loadChildren: () => import('./hoffman/hoffman.module').then( m => m.HoffmanPageModule)
  },
  {
    path: 'hopewell',
    loadChildren: () => import('./hopewell/hopewell.module').then( m => m.HopewellPageModule)
  },
  {
    path: 'hopewellmontgomery',
    loadChildren: () => import('./hopewellmontgomery/hopewellmontgomery.module').then( m => m.HopewellmontgomeryPageModule)
  },
  {
    path: 'johnsonmurdough',
    loadChildren: () => import('./johnsonmurdough/johnsonmurdough.module').then( m => m.JohnsonmurdoughPageModule)
  },
  {
    path: 'mason',
    loadChildren: () => import('./mason/mason.module').then( m => m.MasonPageModule)
  },
  {
    path: 'millshellman',
    loadChildren: () => import('./millshellman/millshellman.module').then( m => m.MillshellmanPageModule)
  },
  {
    path: 'parrottsmith',
    loadChildren: () => import('./parrottsmith/parrottsmith.module').then( m => m.ParrottsmithPageModule)
  },
  {
    path: 'patmorelumley',
    loadChildren: () => import('./patmorelumley/patmorelumley.module').then( m => m.PatmorelumleyPageModule)
  },
  {
    path: 'pioneer',
    loadChildren: () => import('./pioneer/pioneer.module').then( m => m.PioneerPageModule)
  },
  {
    path: 'pureoil',
    loadChildren: () => import('./pureoil/pureoil.module').then( m => m.PureoilPageModule)
  },
  {
    path: 'sage',
    loadChildren: () => import('./sage/sage.module').then( m => m.SagePageModule)
  },
  {
    path: 'smethurst',
    loadChildren: () => import('./smethurst/smethurst.module').then( m => m.SmethurstPageModule)
  },
  {
    path: 'snider',
    loadChildren: () => import('./snider/snider.module').then( m => m.SniderPageModule)
  },
  {
    path: 'snidercrain',
    loadChildren: () => import('./snidercrain/snidercrain.module').then( m => m.SnidercrainPageModule)
  },
  {
    path: 'stixdurbrow',
    loadChildren: () => import('./stixdurbrow/stixdurbrow.module').then( m => m.StixdurbrowPageModule)
  },
  {
    path: 'taulman',
    loadChildren: () => import('./taulman/taulman.module').then( m => m.TaulmanPageModule)
  },
  {
    path: 'universalist',
    loadChildren: () => import('./universalist/universalist.module').then( m => m.UniversalistPageModule)
  },
  {
    path: 'weller',
    loadChildren: () => import('./weller/weller.module').then( m => m.WellerPageModule)
  },
  {
    path: 'wilderswaim',
    loadChildren: () => import('./wilderswaim/wilderswaim.module').then( m => m.WilderswaimPageModule)
  },
  {
    path: 'wooleykelsch',
    loadChildren: () => import('./wooleykelsch/wooleykelsch.module').then( m => m.WooleykelschPageModule)
  },
  {
    path: 'yost',
    loadChildren: () => import('./yost/yost.module').then( m => m.YostPageModule)
  },
  {
    path: 'sherrittrees',
    loadChildren: () => import('./sherrittrees/sherrittrees.module').then( m => m.SherrittreesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandmarksPageRoutingModule {}
