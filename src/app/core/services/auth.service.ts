import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

  // AUTH
  login(data: any) {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, data)
  }

  logout() {
    console.log(`Logout Successfully`);
    localStorage.removeItem('auth_token')
    this.tokenStorageService.logOut();
  }
}

