import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capitales',
  templateUrl: './capitales.component.html',
})
export class CapitalesComponent {
  termino: string = '';
  hayError: boolean = false;
  capitales: Country[] = [];


  constructor(private paisService: PaisService){

  }

  buscar(query: string){
    this.hayError = false;
    this.termino = query;

    this.paisService.buscarCapital(query).subscribe({
      next: (capital) => {
        this.capitales = capital
      }, error: (err) => {
        this.hayError = true;
        this.capitales = [];
      }
    })
  }
}
