  import { Component, Input, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { AuthService } from '../services/auth.service';
  import { SignUpService } from '../services/sign-up.service';

  @Component({
    selector: 'app-verify',
    // Make the conditional verification
    template: `
    <div class="container">
      <ng-container *ngIf="verificationSuccess; else errorTemplate">
        <h2>Verification successful!!</h2>
        <p>The email has been successfully verified</p>
      </ng-container>
      <ng-template #errorTemplate>
        <h2>Verification error</h2>
        <p>There was an error verifying the email</p>
      </ng-template>
    </div>
`,
    styles: ``
  })
  export class VerifyComponent implements OnInit {
    verificationSuccess = false;
    constructor(
      private route: ActivatedRoute,
      private signUpService: SignUpService
    ) { }

    ngOnInit(): void {
      // Capturar el token de la URL
      const token = this.route.snapshot.queryParams['token'];
      
      // Llamar al método verify del servicio AuthService para enviar el token al backend
      if (token) {
        this.signUpService.verify(token).subscribe(
          (response) => {
            console.log('Verificación exitosa:', response);
            this.verificationSuccess = true;
            // Aquí puedes manejar la respuesta exitosa, por ejemplo, redireccionar o mostrar un mensaje
          },
          (error) => {
            console.error('Error en la verificación:', error);
            this.verificationSuccess = false;
            // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error al usuario
          }
        );
      } else {
        console.error('Token no encontrado en la URL');
        this.verificationSuccess = false;
        // Manejar caso donde el token no está presente en la URL
      }
    }

  }