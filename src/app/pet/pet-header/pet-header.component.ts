import { Component } from '@angular/core';

@Component({
  selector: 'app-pet-header',
  templateUrl: './pet-header.component.html',
  styleUrls: ['./pet-header.component.css']
})
export class PetHeaderComponent {
  logoUrl: string = 'https://api.dicebear.com/9.x/rings/svg?seed=Oreo'; // Example logo URL
}
