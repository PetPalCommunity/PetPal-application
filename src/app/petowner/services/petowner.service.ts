import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { petOwnerProfileDTO, petResponseDTO } from '../interfaces/petowner.interface';

@Injectable({
    providedIn: 'root'
})
export class PetOwnerService {
    private http = inject(HttpClient);
    
    getProfile(alias: string): Observable<petOwnerProfileDTO> {
        return this.http.get<petOwnerProfileDTO>(`${environment.apiUrl}/petOwners/profile/${alias}`);
    }

    getFile(image: string): Observable<Blob> {
        return this.http.get(`${environment.apiUrl}/user/file/${image}`, { responseType: 'blob' });
    }
    
    getPets(alias: string): Observable<petResponseDTO[]> {
        return this.http.get<petResponseDTO[]>(`${environment.apiUrl}/pets/${alias}`);
    }

}