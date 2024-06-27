import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { PetResponseDTO } from '../interface/pet.interface';
import { PetService } from '../services/pet.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent implements OnInit {
  pet: PetResponseDTO | null = null;
  profileImage: SafeUrl = '';
  defaultProfileImage: string = 'assets/gato.jpg';


  constructor(private router: Router,
        private route: ActivatedRoute,
        private petService: PetService,
        private sanitizer: DomSanitizer
  ) {} // Inject Router

  ngOnInit(): void {
    const alias = this.route.snapshot.paramMap.get('alias');
    const petName = this.route.snapshot.paramMap.get('petName');
    if (alias && petName) {
      this.loadPet(alias, petName);
    }
  }

  loadPet(alias: string, petName: string): void {
    this.petService.getPetByOwnerAndName(alias, petName).subscribe({
      next: (pet) => {
        this.pet = pet;
        if (pet.image) {
          this.loadProfileImage(pet.image);
        } else {
          this.profileImage = this.defaultProfileImage;
        }
      },
      error: (err) => {
        console.error('Error al cargar la mascota:', err.message);
      }
    });
  }
  loadProfileImage(imageName: string): void {
    this.petService.getFile(imageName).subscribe({
      next: (imageBlob) => {
        const objectURL = URL.createObjectURL(imageBlob);
        this.profileImage = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      },
      error: (err) => {
        console.error('Error al cargar imagen de la mascota:', err.message);
        this.profileImage = this.defaultProfileImage;
      }
    });
  }

  editProfile(): void {
    this.router.navigate(['/pet/update-profile']); // Navigate to the Update Profile page
  }
}
