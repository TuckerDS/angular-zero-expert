import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Hero } from '../interfaces/hero.interface';
import { Observable, catchError, map, of } from 'rxjs';
import { environments } from '../../../enviroments/environments';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  private baseUrl: string = environments.baseUrl
  constructor(private http: HttpClient) {
  }


  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`)
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero)
  }

  updateHeroById(hero: Hero): Observable<Hero> {
    if (!hero.id) throw Error('Hero id is requires');

    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero)
  }

  deleteHeroById(hero: Hero): Observable<boolean> {
    if (!hero.id) throw Error('Hero id is requires');

    return this.http.delete(`${this.baseUrl}/heroes/${hero.id}`)
      .pipe(
        map(res => true),
        catchError(err => of(false))
      )
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`).pipe(
      catchError(err => {
        return of(undefined)
      })
    )
  }

  getSuggestionsQuery(query: string): Observable<Hero[]> {
    const params: HttpParams = new HttpParams()
      .set('q', query)
      .set('_limit', 6);
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`, { params })
  }
}
