import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';


import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthRequestDTO, AuthResponseDTO } from '../interfaces/auth.interface'

const authKey = 'banking_auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private _auth = signal<AuthResponseDTO | null>(null);

  auth = computed(() => this._auth());

  constructor() {
    const authString = localStorage.getItem(authKey);

    if (authString) {
      this._auth.set(JSON.parse(authString));
    }
  }
 

  /*get user() {
    return this._auth?.user;
  }

  get token() {
    return this._auth?.token;
  }*/

  /*authenticate(loginRequest: LoginRequest) {
    const url = `${this.baseUrl}/auth/token`;
    return this.http.post<LoginResponse>(url, loginRequest)
      .pipe(
        map(response => {
          localStorage.setItem(authKey, JSON.stringify(response));
          this._auth = response;
          return response.user;
        })
      );
  } */

      login(authRequest: AuthRequestDTO) {
        return this.http.post<AuthResponseDTO>(`${environment.apiUrl}/auth/login`, authRequest)
          .pipe(
            map(response => {
              localStorage.setItem(authKey, JSON.stringify(response));
              this._auth.set(response);
              return response.user;
            })
          );
      }
    
  

  logout() {
    localStorage.removeItem(authKey);
    //this._auth = undefined;
    this._auth.set(null);
  }

  
  
}
