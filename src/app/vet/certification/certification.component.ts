import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent {
  constructor(private router: Router, private snackBar: MatSnackBar) {} // Inject MatSnackBar

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      console.log(`File selected: ${file.name}`);
      // Simulate file upload process
      setTimeout(() => {
        // Simulate successful upload and verification pending
        localStorage.setItem('verificationStatus', 'pending');
        // Show success message
        this.snackBar.open('File uploaded successfully!', 'Close', {
          duration: 3000, // Duration in milliseconds
        });
        // After successful upload, redirect to vet-profile
        this.router.navigate(['/vet/vet-profile']);
      }, 1000);
    }
  }
}
