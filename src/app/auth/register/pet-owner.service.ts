import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetOwnerService {
  private apiUrl = 'http://localhost:8080/api/petowners'; // replace with your API url

  constructor(private http: HttpClient) { }

  registerPetOwner(dto: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, dto);
  }

  signIn(dto: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, dto);
  }

  getAllPetOwners(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  follow(followerId: number, followedId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/follow`, { followerId, followedId });
  }

  unfollow(followerId: number, followedId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/unfollow`, { params: { followerId, followedId } });
  }

  getFollowers(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/followers`, { params: { id } });
  }
}
