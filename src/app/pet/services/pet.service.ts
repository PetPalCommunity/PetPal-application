import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { PetRequestDTO, PetResponseDTO } from '../interface/pet.interface';


@Injectable({
  providedIn: 'root'
})
export class PetService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

    getFile(image: string): Observable<Blob> {
        return this.http.get(`${environment.apiUrl}/user/file/${image}`, { responseType: 'blob' });
    }

    createPet(pet: PetRequestDTO): Observable<PetResponseDTO> {
        return this.http.post<PetResponseDTO>(`${environment.apiUrl}/pets/create`, pet);
    }
    getPetByOwnerAndName(alias: string, petName: string): Observable<PetResponseDTO> {
        return this.http.get<PetResponseDTO>(`${environment.apiUrl}/pets/${alias}/${petName}`);
    }

}
