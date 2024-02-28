import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanMatch, CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  private checkAuthStatus(): Observable<boolean> {
    return this.authService.checkAuth().pipe(
      tap(isAuthenticate => console.log('Authenticated:', isAuthenticate)),
      tap(isAuthenticate => {
        if (!isAuthenticate) {
          this.router.navigate(['/auth/login'])
        }
      }),
    );
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> {
    console.log('canMatch: ', route, segments)
    return this.checkAuthStatus();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    console.log('canActivate: ', route, state)
    return this.checkAuthStatus();
  }


}
