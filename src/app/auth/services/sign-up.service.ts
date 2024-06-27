import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { RegisterRequestDTO, ResetPassRequestDTO, UserProfileDTO, VerificationRequestDTO } from '../interfaces/auth.interface';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  
  signup(signupRequest: RegisterRequestDTO) {
    const url = `${this.baseUrl}/auth/register`;
    return this.http.post<UserProfileDTO>(url, signupRequest);    
  }
  verify(token: string): Observable<UserProfileDTO> {
    let params = new HttpParams().set('token', token);
    return this.http.put<UserProfileDTO>(environment.apiUrl+'/auth/verify', null, { params });
  }
  changePassword(resetPassRequestDTO: ResetPassRequestDTO)   {
    return this.http.put(environment.apiUrl+'/auth/reset-password', resetPassRequestDTO,{ responseType: 'text' });
  }

  sendPasswordResetEmail(verificationRequestDTO:VerificationRequestDTO)  {
    return this.http.post(environment.apiUrl+'/auth/send-forgot-password', verificationRequestDTO,{ responseType: 'text' });
  }

}
