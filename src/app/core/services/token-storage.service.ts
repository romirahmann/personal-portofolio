import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private authToken = new BehaviorSubject<string>(localStorage.getItem('auth_token') || '');
  private authUserName = new BehaviorSubject<any>(localStorage.getItem('auth_username'));
  constructor() { }

  saveToken(token: string, username: string){
    localStorage.setItem('auth_token', token);
    localStorage.setItem('auth_username', username);
    this.authToken.next(token);
    this.authUserName.next(username);
  }

  getToken(){
    return localStorage.getItem('auth_token');
  }

  getUserName(): any{
    return localStorage.getItem('auth_username');
  }

  isLoggedIn(): Observable<boolean> {
    return this.authToken.pipe(
      map((token: string) => !!token)
    );
  }

  logOut(){
    this.authToken.next('');
    this.authUserName.next('');
  }

}
