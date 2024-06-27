import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { petOwnerProfileDTO } from '../interfaces/petowner.interface';

@Injectable({
    providedIn: 'root'
})
export class PetOwnerService {
    private http = inject(HttpClient);
    
/*     unlinkCard(cardStateChangeDTO: CardStateChangeDTO): Observable<CardDetailsDTO> {
        return this.http.put<CardDetailsDTO>(environment.apiUrl+'/card/unlink', cardStateChangeDTO);
    } */
    getProfile(alias: string): Observable<petOwnerProfileDTO> {
        return this.http.get<petOwnerProfileDTO>(`${environment.apiUrl}/petOwners/profile/${alias}`);
    }

    getFile(image: string): Observable<Blob> {
        return this.http.get(`${environment.apiUrl}/user/file/${image}`, { responseType: 'blob' });
    }


}