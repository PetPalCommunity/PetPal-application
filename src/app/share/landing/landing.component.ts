import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  template: `
    <div>
        <h1>¡Bienvenido a Petpal!</h1>
        <p>Una nueva experiencia con otra imagen</p>
        <p>
            <a href="#" class="button">Get Started</a>
        </p>
    </div>
  `,
  styles: `
        div {
            font-family: var(--font-family);
            line-height: 1.6;
            margin: 0;
            padding: 0;
            /* background-image: linear-gradient(120deg, #a1c4fd, #c2e9fb); */
            background: url('../../../assets/fido.png') no-repeat center center/cover;
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            border-radius: 8px;
        }
        h1, p {
            text-align: center;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
        }
        .button:hover {
            background-color: #0056b3;
        }
  `
})
export class LandingComponent {

}
