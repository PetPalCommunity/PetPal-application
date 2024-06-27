import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.css']
})
export class ProfileSummaryComponent {
  @Input() profilePicture: string = ''; // Profile picture URL
  @Input() name: string = ''; // Name of the vet
  @Input() title: string = ''; // Title or specialty
  @Input() rating: number = 0; // Rating out of 5
}
