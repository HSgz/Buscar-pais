import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalesComponent } from './pages/capitales/capitales.component';
import { PaisComponent } from './pages/pais/pais.component';
import { RegionComponent } from './pages/region/region.component';
import { UnPaisComponent } from './pages/un-pais/un-pais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';



@NgModule({
  declarations: [
    CapitalesComponent,
    PaisComponent,
    RegionComponent,
    UnPaisComponent,
    PaisTablaComponent,
    PaisInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CapitalesComponent,
    PaisComponent,
    RegionComponent,
    UnPaisComponent
  ]
})
export class PaisesModule { }
