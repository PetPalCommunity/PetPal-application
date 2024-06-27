import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-pet-registration-form',
  templateUrl: './pet-registration-form.component.html',
  styleUrl: './pet-registration-form.component.css'
})
export class PetRegistrationFormComponent {
  petType: string = '';
  breed: string = '';
  name: string = '';
  birthdate: string = '';
  weight: number = 0;
  height: number = 0;
  color: string = '';
  description: string = '';
  profilePicture: string = '';
  imagePreview: string = '';
  savePet() {
    console.log(this.petType);
    console.log(this.breed);
    console.log(this.name);
    console.log(this.birthdate);
    console.log(this.weight);
    console.log(this.height);
    console.log(this.color);
    console.log(this.description);
    console.log(this.profilePicture);
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      const petData = form.value;
      console.log(petData);
    }
  }
  updateImagePreview() {
    this.imagePreview = this.profilePicture;
  }
}

