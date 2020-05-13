import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityservicesPage } from './cityservices.page';

const routes: Routes = [
  {
    path: '',
    component: CityservicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityservicesPageRoutingModule {}
