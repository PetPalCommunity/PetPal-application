import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { PetownerRoutingModule } from './petowner-routing.module';
import { PetownerComponent } from './petowner.component';
import { PetownerheaderComponent } from './petownerheader/petownerheader.component';
import { HomeComponent } from './home/home.component';
import { PetownerprofileComponent } from './petownerprofile/petownerprofile.component';
import { ProfilesummaryComponent } from './profilesummary/profilesummary.component';
import {MatIcon} from "@angular/material/icon";
import { ProfileSummaryPetComponent } from './profile-summary-pet/profile-summary-pet.component';
import { PetRegistrationFormComponent } from './pet-registration-form/pet-registration-form.component';
import {PostComponent} from "./post/post.component";
import {MatButton} from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    PetownerComponent,
    PetownerheaderComponent,
    HomeComponent,
    PetownerprofileComponent,
    ProfilesummaryComponent,
    ProfileSummaryPetComponent,
    PetRegistrationFormComponent,
    PostComponent
  ],
  imports: [
    
    CommonModule,
    PetownerRoutingModule,
    MatIcon,
    MatDialogModule,
    FormsModule,
    MatButton,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule
  ]
})
export class PetownerModule { }
