import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../enviroments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl: string = environments.baseUrl
  private user?: User;

  constructor(private http: HttpClient) { }

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  checkAuth(): Observable<boolean> {
    const token = localStorage.getItem('token');

    if (!token) return of(false);

    return this.http.get<User>(`${this.baseUrl}/users/${token}`)
      .pipe(
        tap(user => this.user = user),
        map(user => !!user),
        catchError(err => of(false))
      );
  }

  login(user: string, email: string): Observable<User> {
    // http.post
    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap(user => this.user = user),
        tap(user => localStorage.setItem('token', user.id.toString()))
      );
  }

  logout(): void {
    this.user = undefined;
    localStorage.clear()
  }

}
