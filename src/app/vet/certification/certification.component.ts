import { Component } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent {
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      console.log(`File selected: ${file.name}`);
      // Handle the file upload logic here
    }
  }
}
