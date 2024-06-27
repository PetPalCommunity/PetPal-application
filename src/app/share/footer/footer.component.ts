import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<footer>
      <p>© 2024 Línea 1. Todos los derechos reservados.</p>
      <p>Contáctanos: proyecto.línea1.upc&#64;gmail.com</p>
    </footer>`,
  styles: `
  footer {
    background-color: #333;
    color: #fff;
    padding-bottom: 20px;
    padding-top: 20px;
    text-align: center;
    bottom: 0;
    width: 100%;
    top: 0;
  }
  footer p {
      margin: 5px 0;
  }
  footer a {
      color: #fff;
      text-decoration: none;
  }
  footer a:hover {
      text-decoration: underline;
  }
`
})
export class FooterComponent {

}
