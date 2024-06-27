import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PetRegistrationFormComponent } from '../pet-registration-form/pet-registration-form.component';

@Component({
  selector: 'app-petownerprofile',
  templateUrl: './petownerprofile.component.html',
  styleUrls: ['./petownerprofile.component.css']
})
export class PetownerprofileComponent implements OnInit {
  name: string = 'jacky123';
  title: string = 'Experienced Adopter';
  profileImageUrl: string = 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg';
  followers: number = 150;
  verified: boolean = true;
  communities: { name: string, image: string }[] = [

    { name: 'Nombre de la comunidad', image: 'URL de la imagen de la comunidad' },

  ];
  galleryImages: string[] = [

    'URL de la imagen de la galería',
  ];
  pets: { profilePicture: string, name: string, petType: string, breed: string }[] = [
    { profilePicture: 'https://as01.epimg.net/diarioas/imagenes/2022/05/29/actualidad/1653826510_995351_1653826595_noticia_normal_recorte1.jpg', name: 'Fido', petType: 'Perro', breed: 'Golden Retriever' },
  ];
  addPet() {
    this.pets.unshift({
      profilePicture: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg',
      name: 'Firulais',
      petType: 'Perro',
      breed: 'Chihuahua'
    });
  }
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  addCommunity() {
    this.communities.push({
      name: 'Nueva comunidad',
      image: 'URL de la imagen de la nueva comunidad'
    });
  }
  openPetRegistrationForm() {
    this.dialog.open(PetRegistrationFormComponent);
  }
}
