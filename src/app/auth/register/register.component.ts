import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SignUpService } from '../services/sign-up.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{ 
  form: FormGroup;
  passwordVisible = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private signUpService: SignUpService
  ) {
    this.form = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      lastname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      alias: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      role: ['', [Validators.required]],
    });
  }
  ngOnInit(): void { }
  controlHasError(controlName: string, errorName: string): boolean {
    return this.form.controls[controlName].hasError(errorName);
  }
  signUp() {
    if (this.form.invalid) {
      return;
    }
    const registerRequest = {
      firstname: this.form.value.firstname,
      lastname: this.form.value.lastname,
      alias: this.form.value.alias,
      email: this.form.value.email,
      password: this.form.value.password,
      phoneNumber: this.form.value.phoneNumber,
      role: this.form.value.role
    }

    this.signUpService.signup(registerRequest).subscribe({
      next:() => {
        this.showSnackBar('Usuario registrado correctamente');
        this.router.navigate(['/auth/login'])
      },
      error: (err) => {
        console.error('Error en el registro:', err.message);
        this.showSnackBar(err.message);
      },
  });
  }
  
  
  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }
}