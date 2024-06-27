import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommunityResponse } from './interfaces/community.interface';
import { environment } from '../../environments/environment';
import { CommunityRequest } from './interfaces/community.interface'; // Adjust the path accordingly

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  private apiUrl = 'http://your-backend-api-url/communities'; // Cambia esto a tu URL de API

  constructor(private http: HttpClient) {}

  getCommunity(name: string): Observable<CommunityResponse> {
    return this.http.get<CommunityResponse>(`${environment.apiUrl}/communities/${name}`);
  }

  createCommunity(communityRequest: CommunityRequest): Observable<CommunityResponse> {
    return this.http.post<CommunityResponse>(`${environment.apiUrl}/communities/create`, communityRequest);
  }
}
