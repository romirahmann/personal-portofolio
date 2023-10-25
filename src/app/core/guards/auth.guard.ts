import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
    constructor(private apiService: TokenStorageService, private router: Router) { }
    
    canActivate(): Observable<boolean> {
        return this.apiService.isLoggedIn().pipe(
          map((isLoggedIn: boolean) => {
            if (isLoggedIn) {
              // User is logged in, allow access to the route
              return true;
            } else {
              // User is not logged in, redirect to the login page
              this.router.navigate(['/auth/login']);
              return false;
            }
          })
        );
      }
}
