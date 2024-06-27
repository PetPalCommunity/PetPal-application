import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-profilesummary',
  templateUrl: './profilesummary.component.html',
  styleUrl: './profilesummary.component.css'
})
export class ProfilesummaryComponent {
  @Input() profilePicture: string = '';
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() followers: number = 0;
}

