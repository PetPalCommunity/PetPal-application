import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PetRegistrationFormComponent } from '../pet-registration-form/pet-registration-form.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PetOwnerService } from '../services/petowner.service';

@Component({
  selector: 'app-petownerprofile',
  templateUrl: './petownerprofile.component.html',
  styleUrls: ['./petownerprofile.component.css']
})

export class PetownerprofileComponent implements OnInit {

    petOwner: string = '';
    followers: number = 0;
    following: number = 0;
    alias : string = '';
    description: string = '';
    profileImage: SafeUrl = '';
    defaultProfileImage: string = 'assets/default.jpg';
  
    readonly descriptionLimit: number = 100;
  dialog: any;
    constructor(
      private petOwnerService: PetOwnerService,
      private sanitizer: DomSanitizer
    ){}
    ngOnInit(): void {
      const authDataString = localStorage.getItem('banking_auth');
      if (authDataString) {
        const authData = JSON.parse(authDataString);
        this.alias = authData.user.alias;
        
        this.showData();
      }
    }
    
    showData(): void {
      this.petOwnerService.getProfile(this.alias).subscribe({
        next: (response) => {
          this.followers = response.followers;
          this.following = response.followed;
          this.petOwner = response.firstname + ' ' + response.lastname;
          this.description = response.description;
          if (response.image) {
            this.loadProfileImage(response.image); // Carga la imagen del perfil si existe
          } else {
            this.profileImage = this.defaultProfileImage; // Usa la imagen por defecto si no existe
          }
        },
        error: (err) => {
          console.error('Error al buscar perfil:', err.message);
          console.log('Error al buscar perfil:', this.alias);
        },
      });
    }
    loadProfileImage(imageName: string): void {
      this.petOwnerService.getFile(imageName).subscribe({
        next: (imageBlob) => {
          const objectURL = URL.createObjectURL(imageBlob);
          this.profileImage = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        },
        error: (err) => {
          console.error('Error al cargar imagen:', err.message);
        }
      });
    }
    openPetRegistrationForm() {
      this.dialog.open(PetRegistrationFormComponent);
    }
  }