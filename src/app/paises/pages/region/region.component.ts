import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class RegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  regionActiva: string = '';

  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  getRegionActivaCss(region: string): string {
    return region === this.regionActiva
      ? 'animate__animated animate__headShake btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) return;

    this.regionActiva = region;
    this.paises = [];

    this.paisService
      .buscarRegion(region)
      .subscribe((paises) => (this.paises = paises));
  }
}
