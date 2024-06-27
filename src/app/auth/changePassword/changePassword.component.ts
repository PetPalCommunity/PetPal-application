import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SignUpService } from '../services/sign-up.service';

@Component({
  selector: 'app-changePassword',
  template: `
    <div class="container">
      <h2>Ingrese su nueva contraseña</h2>
      <form [formGroup]="form" (ngSubmit)="changePassword()">
        <label for="password">Tu contraseña:</label>
        <input type="password" id="password" formControlName="password">
        <div class="button-container">
          <button type="submit">Cambiar</button>
          <button routerLink="..">Volver</button>
        </div>
      </form>
    </div>
  `,
  styles: ``
})
export class changePasswordComponent implements OnInit {
  form: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private signUpService: SignUpService
  ) {
    this.form = this.fb.group({
      password: ['', [Validators.required]] 
    });
  }
  ngOnInit(): void {
      
  }
  changePassword(): void {
    const requestoDTO = {
      token: this.route.snapshot.queryParams['token'],
      newPassword: this.form.value.password
    }
    this.signUpService.changePassword(requestoDTO).subscribe({
      next: (response) => {
        console.log("hi");
        console.log(response);
        this.router.navigate(['/auth/login']);
      },
    });
  }
}