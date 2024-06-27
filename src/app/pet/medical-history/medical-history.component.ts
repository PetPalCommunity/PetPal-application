import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PetRequestDTO, PetResponseDTO, ReminderResponseDTO } from '../interface/pet.interface';
import { AddReminderDialogComponent } from '../add-reminder-dialog/add-reminder-dialog.component';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../services/pet.service';
import { PetOwnerService } from '../../petowner/services/petowner.service';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent implements OnInit {
  pet: PetResponseDTO | null = null;
  alias: string = '';
  reminders: ReminderResponseDTO[] = [];
  contact: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private petService: PetService,
    private router: Router, 
    private dialog: MatDialog,
    private petOwnerService: PetOwnerService
  ) {}

  ngOnInit(): void {
    const petName = this.route.snapshot.paramMap.get('petName');
    const authDataString = localStorage.getItem('PetPal_auth');
    
    if (authDataString) {
      const authData = JSON.parse(authDataString);
      this.alias = authData.user.alias;
    
      if (this.alias && petName) {
        this.loadPet(this.alias, petName);
        this.loadUser(this.alias);
        this.loadReminders(petName);
      }
    }
  }

  loadPet(alias: string, petName: string): void {
    this.petService.getPetByOwnerAndName(alias, petName).subscribe({
      next: (pet) => {
        this.pet = pet;
      },
      error: (err) => {
        console.error('Error al cargar la mascota:', err.message);
      }
    });
  }

  loadUser(alias: string): void {
    this.petOwnerService.getProfile(alias).subscribe({
      next: (user) => {
        this.contact = user.sex == 'Hombre' ? "Dad: +51 " + user.phone : "Mom: +51 " + user.phone;
      },
      error: (err) => {
        console.error('Error al cargar el usuario:', err.message);
      }
    });
  }

  loadReminders(petName: string): void {
    this.petService.getReminders(petName).subscribe({
      next: (reminders) => {
        this.reminders = reminders;
      },
      error: (err) => {
        console.error('Error al cargar los recordatorios:', err.message);
      }
    });
  }
  
  addReminder(): void {
    const dialogRef = this.dialog.open(AddReminderDialogComponent, {
      width: '300px',
      data: { petName: this.pet?.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newReminder: ReminderResponseDTO = {
          id: this.reminders.length + 1,
          name: result.name,
          description: result.description,
          nextDate: 'Fixed Next Date', // Add your logic for fixed next date
          time: result.time,
          days: result.days
        };
        this.reminders.push(newReminder);
      }
    });
  }

  deleteReminder(reminderId: number): void {
    if (this.pet?.name) {
      this.petService.deleteReminder(this.pet.name, reminderId).subscribe({
        next: () => {
          this.reminders = this.reminders.filter(reminder => reminder.id !== reminderId);
        },
        error: (err) => {
          console.error('Error al eliminar el recordatorio:', err.message);
        }
      });
    }
  }
}
