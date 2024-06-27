import { Component } from '@angular/core';

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
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  vetName: string = 'Alessandra';

  readonly descriptionLimit: number = 100;

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
