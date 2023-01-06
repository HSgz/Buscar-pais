import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v2';
  private apiV3: string = 'https://restcountries.com/v3.1';

  get HttpParams() {
    return new HttpParams().set('fields', 'name,capital,population,flags,cioc');
  }

  constructor(private http: HttpClient) {}

  buscarPais(query: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiV3}/name/${query}`, {
      params: this.HttpParams,
    });
  }

  buscarCapital(query: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${query}`, {
      params: this.HttpParams,
    });
  }

  getPaisPorAlpha(query: string): Observable<Country> {
    return this.http.get<Country>(`${this.apiV3}/alpha/${query}`);
  }

  buscarRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiV3}/region/${region}`, {
      params: this.HttpParams,
    });
  }
}
