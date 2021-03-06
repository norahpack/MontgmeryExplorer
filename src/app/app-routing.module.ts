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
  {
    path: 'morgan',
    loadChildren: () => import('./extras/morgan/morgan.module').then( m => m.MorganPageModule)
  },
  {
    path: 'tornadopics',
    loadChildren: () => import('./tornado/tornadopics/tornadopics.module').then( m => m.TornadopicsPageModule)
  },
  {
    path: 'tavern',
    loadChildren: () => import('./tavern/tavern.module').then( m => m.TavernPageModule)
  },
  {
    path: 'landmarks',
    loadChildren: () => import('./landmarks/landmarks.module').then( m => m.LandmarksPageModule)
  },
  {
    path: 'styles',
    loadChildren: () => import('./about/styles/styles.module').then( m => m.StylesPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./landmarks/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'arstingstallmay',
    loadChildren: () => import('./landmarks/arstingstallmay/arstingstallmay.module').then( m => m.ArstingstallmayPageModule)
  },
    {
    path: 'bell',
    loadChildren: () => import('./landmarks/bell/bell.module').then( m => m.BellPageModule)
  },
    {
    path: 'blairbarker',
    loadChildren: () => import('./landmarks/blairbarker/blairbarker.module').then( m => m.BlairbarkerPageModule)
  },
    {
    path: 'cameronfeinthel',
    loadChildren: () => import('./landmarks/cameronfeinthel/cameronfeinthel.module').then( m => m.CameronfeinthelPageModule)
  },
    {
    path: 'crainconklin',
    loadChildren: () => import('./landmarks/crainconklin/crainconklin.module').then( m => m.CrainconklinPageModule)
  },
    {
    path: 'craineberhard',
    loadChildren: () => import('./landmarks/craineberhard/craineberhard.module').then( m => m.CraineberhardPageModule)
  },
    {
    path: 'crist',
    loadChildren: () => import('./landmarks/crist/crist.module').then( m => m.CristPageModule)
  },
    {
    path: 'formervillage',
    loadChildren: () => import('./landmarks/formervillage/formervillage.module').then( m => m.FormervillagePageModule)
  },
    {
    path: 'groverkjellenberg',
    loadChildren: () => import('./landmarks/groverkjellenberg/groverkjellenberg.module').then( m => m.GroverkjellenbergPageModule)
  },
    {
    path: 'hoffman',
    loadChildren: () => import('./landmarks/hoffman/hoffman.module').then( m => m.HoffmanPageModule)
  },
    {
    path: 'hopewell',
    loadChildren: () => import('./landmarks/hopewell/hopewell.module').then( m => m.HopewellPageModule)
  },
    {
    path: 'hopewellmontgomery',
    loadChildren: () => import('./landmarks/hopewellmontgomery/hopewellmontgomery.module').then( m => m.HopewellmontgomeryPageModule)
  },
    {
    path: 'jamesayers',
    loadChildren: () => import('./landmarks/jamesayers/jamesayers.module').then( m => m.JamesayersPageModule)
  },
    {
    path: 'johnsonmurdough',
    loadChildren: () => import('./landmarks/johnsonmurdough/johnsonmurdough.module').then( m => m.JohnsonmurdoughPageModule)
  },
    {
    path: 'jonathancrain',
    loadChildren: () => import('./landmarks/jonathancrain/jonathancrain.module').then( m => m.JonathancrainPageModule)
  },
    {
    path: 'mason',
    loadChildren: () => import('./landmarks/mason/mason.module').then( m => m.MasonPageModule)
  },
    {
    path: 'millshellman',
    loadChildren: () => import('./landmarks/millshellman/millshellman.module').then( m => m.MillshellmanPageModule)
  },
    {
    path: 'parrottsmith',
    loadChildren: () => import('./landmarks/parrottsmith/parrottsmith.module').then( m => m.ParrottsmithPageModule)
  },
    {
    path: 'patmorelumley',
    loadChildren: () => import('./landmarks/patmorelumley/patmorelumley.module').then( m => m.PatmorelumleyPageModule)
  },
    {
    path: 'pioneer',
    loadChildren: () => import('./landmarks/pioneer/pioneer.module').then( m => m.PioneerPageModule)
  },
    {
    path: 'pureoil',
    loadChildren: () => import('./landmarks/pureoil/pureoil.module').then( m => m.PureoilPageModule)
  },
    {
    path: 'sage',
    loadChildren: () => import('./landmarks/sage/sage.module').then( m => m.SagePageModule)
  },
    {
    path: 'sherrittrees',
    loadChildren: () => import('./landmarks/sherrittrees/sherrittrees.module').then( m => m.SherrittreesPageModule)
  },
    {
    path: 'smethurst',
    loadChildren: () => import('./landmarks/smethurst/smethurst.module').then( m => m.SmethurstPageModule)
  },
    {
    path: 'snider',
    loadChildren: () => import('./landmarks/snider/snider.module').then( m => m.SniderPageModule)
  },
    {
    path: 'snidercrain',
    loadChildren: () => import('./landmarks/snidercrain/snidercrain.module').then( m => m.SnidercrainPageModule)
  },
    {
    path: 'stixdurbrow',
    loadChildren: () => import('./landmarks/stixdurbrow/stixdurbrow.module').then( m => m.StixdurbrowPageModule)
  },
    {
    path: 'taulman',
    loadChildren: () => import('./landmarks/taulman/taulman.module').then( m => m.TaulmanPageModule)
  },
    {
    path: 'universalist',
    loadChildren: () => import('./landmarks/universalist/universalist.module').then( m => m.UniversalistPageModule)
  },
    {
    path: 'wilderswaim',
    loadChildren: () => import('./landmarks/wilderswaim/wilderswaim.module').then( m => m.WilderswaimPageModule)
  },
    {
    path: 'weller',
    loadChildren: () => import('./landmarks/weller/weller.module').then( m => m.WellerPageModule)
  },
    {
    path: 'wooleykelsch',
    loadChildren: () => import('./landmarks/wooleykelsch/wooleykelsch.module').then( m => m.WooleykelschPageModule)
  },
    {
    path: 'yost',
    loadChildren: () => import('./landmarks/yost/yost.module').then( m => m.YostPageModule)
  },
  {
    path: 'churchtimeline',
    loadChildren: () => import('./churchtimeline/churchtimeline.module').then( m => m.ChurchtimelinePageModule)
  },
  {
    path: 'mayors',
    loadChildren: () => import('./mayors/mayors.module').then( m => m.MayorsPageModule)
  },
  {
    path: 'photoalbum',
    loadChildren: () => import('./photoalbum/photoalbum.module').then( m => m.PhotoalbumPageModule)
  },
  {
    path: 'aerial',
    loadChildren: () => import('./aerial/aerial.module').then( m => m.AerialPageModule)
  },
  {
    path: 'downtow',
    loadChildren: () => import('./downtow/downtow.module').then( m => m.DowntowPageModule)
  },
  {
    path: 'cityhall',
    loadChildren: () => import('./cityhall/cityhall.module').then( m => m.CityhallPageModule)
  },
  {
    path: 'cityservices',
    loadChildren: () => import('./cityservices/cityservices.module').then( m => m.CityservicesPageModule)
  },
  {
    path: 'parksandevents',
    loadChildren: () => import('./parksandevents/parksandevents.module').then( m => m.ParksandeventsPageModule)
  },
  {
    path: 'schools',
    loadChildren: () => import('./schools/schools.module').then( m => m.SchoolsPageModule)
  },
  {
    path: 'community',
    loadChildren: () => import('./community/community.module').then( m => m.CommunityPageModule)
  },
{
  path: 'arttrivia',
    loadChildren: () => import('./locations/art/arttrivia/arttrivia.module').then( m => m.ArttriviaPageModule)
},
{
    path: 'cartrivia',
    loadChildren: () => import('./locations/car/cartrivia/cartrivia.module').then( m => m.CartriviaPageModule)
},
  {
    path: 'certtrivia',
    loadChildren: () => import('./locations/cert/certtrivia/certtrivia.module').then( m => m.CerttriviaPageModule)
  },
    {
    path: 'crashtrivia',
    loadChildren: () => import('./locations/crash/crashtrivia/crashtrivia.module').then( m => m.CrashtriviaPageModule)
  },
    {
    path: 'farmerstrivia',
    loadChildren: () => import('./locations/farmers/farmerstrivia/farmerstrivia.module').then( m => m.FarmerstriviaPageModule)
  },
    {
    path: 'firetrivia',
    loadChildren: () => import('./locations/fire/firetrivia/firetrivia.module').then( m => m.FiretriviaPageModule)
  },
    {
    path: 'flowertrivia',
    loadChildren: () => import('./locations/flower/flowertrivia/flowertrivia.module').then( m => m.FlowertriviaPageModule)
  },
    {
    path: 'fourthp1',
    loadChildren: () => import('./locations/fourth/slideshow4/fourthp1/fourthp1.module').then( m => m.Fourthp1PageModule)
  },
    {
    path: 'frenchtrivia',
    loadChildren: () => import('./locations/french/frenchtrivia/frenchtrivia.module').then( m => m.FrenchtriviaPageModule)
  },
    {
    path: 'gatewaytrivia',
    loadChildren: () => import('./locations/gateway/gatewaytrivia/gatewaytrivia.module').then( m => m.GatewaytriviaPageModule)
  },
    {
    path: 'july4trivia',
    loadChildren: () => import('./locations/july4/july4trivia/july4trivia.module').then( m => m.July4triviaPageModule)
  },
    {
    path: 'leadershiptrivia',
    loadChildren: () => import('./locations/leadership/leadershiptrivia/leadershiptrivia.module').then( m => m.LeadershiptriviaPageModule)
  },
    {
    path: 'neuillytrivia',
    loadChildren: () => import('./locations/neuilly/neuillytrivia/neuillytrivia.module').then( m => m.NeuillytriviaPageModule)
  },
    {
    path: 'parrotttrivia',
    loadChildren: () => import('./locations/parrott/parrotttrivia/parrotttrivia.module').then( m => m.ParrotttriviaPageModule)
  },
    {
    path: 'raintrivia',
    loadChildren: () => import('./locations/rain/raintrivia/raintrivia.module').then( m => m.RaintriviaPageModule)
  },
    {
    path: 'recoverytrivia',
    loadChildren: () => import('./locations/recovery/recoverytrivia/recoverytrivia.module').then( m => m.RecoverytriviaPageModule)
  },
    {
    path: 'schooltrivia',
    loadChildren: () => import('./locations/school/schooltrivia/schooltrivia.module').then( m => m.SchooltriviaPageModule)
  },
    {
    path: 'secondp1',
    loadChildren: () => import('./locations/second/slideshow2/secondp1/secondp1.module').then( m => m.Secondp1PageModule)
  },
    {
    path: 'soccertrivia',
    loadChildren: () => import('./locations/soccer/soccertrivia/soccertrivia.module').then( m => m.SoccertriviaPageModule)
  },
    {
    path: 'tedtrivia',
    loadChildren: () => import('./locations/ted/tedtrivia/tedtrivia.module').then( m => m.TedtriviaPageModule)
  },
    {
    path: 'thirdp1',
    loadChildren: () => import('./locations/third/slideshow3/thirdp1/thirdp1.module').then( m => m.Thirdp1PageModule)
  },

  {
    path: 'tornadotrivia',
    loadChildren: () => import('./locations/tornado/tornadotrivia/tornadotrivia.module').then( m => m.TornadotriviaPageModule)
  },
    {
    path: 'taverntrivia',
    loadChildren: () => import('./tavern/taverntrivia/taverntrivia.module').then( m => m.TaverntriviaPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
