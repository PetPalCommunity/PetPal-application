import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-header',
  template: `
    <header class="simple-header">
      <div class="logo">
        <img [src]="logoUrl" alt="PetPal Logo">
      </div>
    </header>
  `,
  styles: [`
    .simple-header {
      background-color: #a2c4f2;
      padding: 10px;
    }

    .logo img {
      height: 40px;
    }
  `]
})
export class SimpleHeaderComponent {
  @Input() logoUrl: string = 'https://api.dicebear.com/9.x/rings/svg?seed=Oreo'; // Default logo URL
}