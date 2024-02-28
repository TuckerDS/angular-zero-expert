import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1'
  private params: HttpParams = new HttpParams()
    .set('fields', 'name,cca2,flags,population');

  constructor(public http: HttpClient) { }

  searchByName(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${query}`;
    return this.http.get<Country[]>(url)
    // .pipe(
    // catchError(err => of([]))
    // );
  }

  searchByCapital(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${query}`;
    return this.http.get<Country[]>(url)
  }

  searchByCode(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${query}`;
    return this.http.get<Country[]>(url)
  }

  searchByRegion(query: string,): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${query}`;
    return this.http.get<Country[]>(url, { params: this.params });
  }

}
