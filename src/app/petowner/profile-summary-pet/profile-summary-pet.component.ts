import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-profile-summary-pet',
  templateUrl: './profile-summary-pet.component.html',
  styleUrl: './profile-summary-pet.component.css'
})
export class ProfileSummaryPetComponent {
  @Input() profilePicture: string = '';
  @Input() name: string = '';
  @Input() petType: string = '';
  @Input() breed:string = '';
}
