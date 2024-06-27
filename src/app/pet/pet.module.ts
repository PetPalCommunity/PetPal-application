import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetHeaderComponent } from './pet-header/pet-header.component';
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { RouterModule } from '@angular/router';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import { PetRoutingModule } from './pet-routing.module';
import { UpdateProfileComponent } from './update-profile/update-profile.component'; 
import { AddReminderDialogComponent } from './add-reminder-dialog/add-reminder-dialog.component';
import { PostComponent } from './post/post.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import { MatDivider } from '@angular/material/divider';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { MatSelect, MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    PetHeaderComponent,
    PetProfileComponent,
    MedicalHistoryComponent,
    UpdateProfileComponent,
    AddReminderDialogComponent,
    CreatePetComponent,
    PostComponent,
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
    FormsModule,
    MatCardModule,
    MatDivider,
    MatSelectModule
  ]
})
export class PetModule { }
