import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetRequestDTO, PetResponseDTO } from '../interface/pet.interface';
import { Router } from '@angular/router';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {
  createForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private petService: PetService
  ) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      species: ['', Validators.required],
      breed: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      sex: ['', Validators.required],
    });
  }

  ngOnInit(): void {
   
  }

  createPet() {
    if (this.createForm.invalid) {
      return;
    }
    const pet: PetRequestDTO = {
      name: this.createForm.value.name,
      species: this.createForm.value.species,
      breed: this.createForm.value.breed,
      age: this.createForm.value.age,
      sex: this.createForm.value.sex
  }

  this.petService.createPet(pet).subscribe({
    next: (response: PetResponseDTO) => {
      this.router.navigate(['/petowner/petownerprofile']);
    },
    error: (err) => {
      console.error('Error al crear mascota:', err.message);
    }
  });
  }
}
