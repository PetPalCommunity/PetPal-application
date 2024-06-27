import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { PetRequestDTO, PetResponseDTO, ReminderRequestDTO, ReminderResponseDTO } from '../interface/pet.interface';


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

    updatePet(pet: PetRequestDTO,name:string): Observable<PetResponseDTO> {
        return this.http.patch<PetResponseDTO>(`${environment.apiUrl}/pets/${name}`, pet);
    }

    getReminders(petName: string): Observable<ReminderResponseDTO[]> {
        return this.http.get<ReminderResponseDTO[]>(`${environment.apiUrl}/pets/reminders/${petName}/all`);
    }

    createReminder(reminder: ReminderRequestDTO): Observable<ReminderResponseDTO> {
        return this.http.post<ReminderResponseDTO>(`${environment.apiUrl}/pets/reminders`, reminder);
    }

    deleteReminder(petName: string, reminderId: number): Observable<void> {
        return this.http.delete<void>(`${environment.apiUrl}/pets/reminders/${petName}`, {
          params: { id: reminderId }
        });
    }

}
