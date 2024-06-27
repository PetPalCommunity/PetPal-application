import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthRequestDTO, AuthResponseDTO } from '../interfaces/auth.interface';

const authKey = 'banking_auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private _auth = signal<AuthResponseDTO | null>(null);
  private router = inject(Router);

  auth = computed(() => this._auth());

  constructor() {
    const authString = localStorage.getItem(authKey);

    if (authString) {
      this._auth.set(JSON.parse(authString));
    }
  }

  login(authRequest: AuthRequestDTO) {
    return this.http.post<AuthResponseDTO>(`${environment.apiUrl}/auth/login`, authRequest)
      .pipe(
        map(response => {
          localStorage.setItem(authKey, JSON.stringify(response));
          this._auth.set(response);
          this.redirectUser(response.user.role);  // Redirige al usuario basado en el rol
          return response.user;
        }),
        catchError(this.handleError)
      );
  }

  logout() {
    localStorage.removeItem(authKey);
    this._auth.set(null);
    this.router.navigate(['/login']);  // Redirige al usuario a la página de inicio de sesión al cerrar sesión
  }

  private redirectUser(role: string) {
    if (role === 'VET') {
      this.router.navigate(['/petowner/home']);
    } else if (role === 'PETOWNER') {
      this.router.navigate(['/petowner/home']);
    } else {
      this.router.navigate(['/']);
    }
  }

  private handleError(error: HttpErrorResponse) {
    // Manejo de errores
    console.error('An error occurred:', error.message);
    return throwError('Something bad happened; please try again later.');
  }
}