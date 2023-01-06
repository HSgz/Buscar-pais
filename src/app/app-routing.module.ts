import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisComponent } from './paises/pages/pais/pais.component';
import { RegionComponent } from './paises/pages/region/region.component';
import { CapitalesComponent } from './paises/pages/capitales/capitales.component';
import { UnPaisComponent } from './paises/pages/un-pais/un-pais.component';

const routes: Routes = [
  {
    path: '',
    component: PaisComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: RegionComponent,
  },
  {
    path: 'capital',
    component: CapitalesComponent,
  },
  {
    path: 'pais/:id',
    component: UnPaisComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
