import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SignUpService } from '../services/sign-up.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styles: ``
})
export class ResetPasswordComponent implements OnInit{
  form: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private signUpService: SignUpService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
      
  }
  sendEmail(): void {
    const requestoDTO = {
      email: this.form.value.email
    }
    this.signUpService.sendPasswordResetEmail(requestoDTO).subscribe({
      next: (response:string) => {
        this.router.navigate(['..']);
      },
      error: (err) => {
        console.error(requestoDTO);
        console.error('Error al añadir tarjeta:', err.message);
      },
    });
  }
}