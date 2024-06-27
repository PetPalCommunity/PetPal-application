import {Component, Input} from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-profilesummary',
  templateUrl: './profilesummary.component.html',
  styleUrl: './profilesummary.component.css'
})
export class ProfilesummaryComponent {
  @Input() profilePicture: SafeUrl = '';
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() followers: number = 0;
}

