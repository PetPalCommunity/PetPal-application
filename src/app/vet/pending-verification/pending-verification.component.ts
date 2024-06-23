import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pending-verification',
  templateUrl: './pending-verification.component.html',
  styleUrls: ['./pending-verification.component.css']
})
export class PendingVerificationComponent {
  @Input() profilePicture: string = '';
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() rating: number = 0;
}