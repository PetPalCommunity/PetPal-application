import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetRequestDTO, PetResponseDTO } from '../interface/pet.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  updateProfileForm: FormGroup;
  currentPet: PetResponseDTO | null = null;
  alias : string = '';

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private petService: PetService,
    private router: Router) 
    
    {
    this.updateProfileForm = this.fb.group({
      name: ['', Validators.required],
      species: ['', Validators.required],
      breed: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      sex: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const petName = this.route.snapshot.paramMap.get('petName');
    const authDataString = localStorage.getItem('PetPal_auth');
    
    if (authDataString) {
      const authData = JSON.parse(authDataString);
      this.alias = authData.user.alias;
    
    console.log(petName);
    if (this.alias && petName) {
      this.loadPet(this.alias, petName);
    }
  }
  }
  loadPet(alias: string, petName: string): void {
    this.petService.getPetByOwnerAndName(alias, petName).subscribe({
      next: (pet) => {
        this.currentPet = pet;
        this.updateProfileForm.patchValue(pet);
      },
      error: (err) => {
        console.error('Error al cargar la mascota:', err.message);
      }
    });
  }
  
  updatePet(): void  {
    if (this.updateProfileForm.invalid) {
      return;
    }
    const pet: PetRequestDTO = {
      name: this.updateProfileForm.value.name,
      species: this.updateProfileForm.value.species,
      breed: this.updateProfileForm.value.breed,
      age: this.updateProfileForm.value.age,
      sex: this.updateProfileForm.value.sex
  }

  this.petService.updatePet(pet,this.currentPet?.name ?? "").subscribe({
    next: (response: PetResponseDTO) => {
      this.router.navigate(['/petowner/petownerprofile']);
      
    },
    error: (err) => {
      console.error('Error al crear mascota:', err.message);
    }
  });
  }
}
