import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vet-profile',
  templateUrl: './vet-profile.component.html',
  styleUrls: ['./vet-profile.component.css']
})
export class VetProfileComponent implements OnInit {
  name: string = 'Alessandra';
  title: string = 'Veterinarian Dogs & Cats';
  profileImageUrl: string = 'https://api.dicebear.com/9.x/adventurer/svg?seed=Callie'; // Profile picture URL
  rating: number = 4; // Rating out of 5
  communities: { name: string, image: string }[] = [
    { name: 'Groomers Clínica Veterinária', image: 'https://api.dicebear.com/9.x/big-ears-neutral/svg?seed=Abby'},
    { name: 'Consejos de Veterinarios', image: 'https://api.dicebear.com/9.x/big-ears-neutral/svg?seed=Gracie' }
  ];
  galleryImages: string[] = [
    'https://api.dicebear.com/9.x/fun-emoji/svg?seed=Snickers',
    'https://api.dicebear.com/9.x/fun-emoji/svg?seed=Angel',
    'https://api.dicebear.com/9.x/fun-emoji/svg?seed=Buddy',
    'https://api.dicebear.com/9.x/fun-emoji/svg?seed=Lily',
    'https://api.dicebear.com/9.x/fun-emoji/svg?seed=Callie',
    'https://api.dicebear.com/9.x/fun-emoji/svg?seed=Gracie'
  ];

  constructor() { }

  ngOnInit(): void { }

  addCommunity() {
    this.communities.push({
      name: 'New Community',
      image: 'assets/new-community.png'
    });
  }
}

