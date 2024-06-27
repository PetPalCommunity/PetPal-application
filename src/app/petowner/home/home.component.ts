import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PetOwnerService } from '../services/petowner.service';
import { AuthService } from '../../auth/services/auth.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


interface CommunityPost {
  communityName: string;
  communityPicture: string;
  date: string;
  postPicture: string;
  postDescription: string;
  likeCount: number;
  isLiked: boolean;
  comments: { author: string, text: string }[];
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  petOwner: string = '';
  followers: number = 0;
  following: number = 0;
  alias : string = '';
  profileImage: SafeUrl = '';
  defaultProfileImage: string = 'assets/default.jpg';

  readonly descriptionLimit: number = 100;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
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

















  communityPosts: CommunityPost[] = [
    {
      communityName: 'vetpartnersperu',
      communityPicture: 'https://api.dicebear.com/9.x/rings/svg?seed=Oreo',
      date: 'March 14',
      postPicture: 'https://api.dicebear.com/9.x/rings/svg?seed=Oreo',
      postDescription: '¡Atención Huacho! 🌟🐱❤️🐶 Regresamos este 23 y 24 de Marzo, dispuestos a proveer servicios de veterinaria excepcionales. Asegúrate de reservar tu cita con antelación para aprovechar las mejores tarifas y un servicio rápido. ¡Te esperamos!',
      likeCount: 13,
      isLiked: false,
      comments: []
    },
    {
      communityName: 'vetpartnersperu',
      communityPicture: 'https://api.dicebear.com/9.x/rings/svg?seed=Oreo',
      date: 'May 25',
      postPicture: 'https://api.dicebear.com/9.x/rings/svg?seed=Oreo',
      postDescription: '¡Atención Huacho! 🌟🐱❤️🐶 Regresamos este 23 y 24 de Marzo, dispuestos a proveer servicios de veterinaria excepcionales. Asegúrate de reservar tu cita con antelación para aprovechar las mejores tarifas y un servicio rápido. ¡Te esperamos!',
      likeCount: 13,
      isLiked: false,
      comments: []
    }
  ];

  addPost() {
    this.communityPosts.push({
      communityName: 'newCommunity',
      communityPicture: 'https://api.dicebear.com/9.x/initials/svg?seed=New',
      date: 'New Date',
      postPicture: 'https://api.dicebear.com/9.x/initials/svg?seed=Post',
      postDescription: 'New post description that is definitely longer than the description limit set above to test the show more functionality...',
      likeCount: 0,
      isLiked: false,
      comments: []
    });
  }

}
