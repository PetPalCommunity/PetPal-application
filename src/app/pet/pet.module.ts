import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetHeaderComponent } from './pet-header/pet-header.component';
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { RouterModule } from '@angular/router';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import { PetRoutingModule } from './pet-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UpdateProfileComponent } from './update-profile/update-profile.component'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AddReminderDialogComponent } from './add-reminder-dialog/add-reminder-dialog.component';
import { MatLabel } from '@angular/material/form-field';

@NgModule({
  declarations: [
    PetHeaderComponent,
    PetProfileComponent,
    MedicalHistoryComponent,
    UpdateProfileComponent,
    AddReminderDialogComponent
  ],
  imports: [
    MatButtonModule,
    PetRoutingModule,
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatLabel,
    ReactiveFormsModule,
  ]
})
export class PetModule { }
