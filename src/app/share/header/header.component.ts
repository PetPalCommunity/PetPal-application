import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <nav>
        <div class="hamburger" (click)="toggleMenu()">
          &#9776;
        </div>
        <ul [class.active]="menuActive">
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/about">About</a></li>
          <li><a routerLink="/contact">Contact</a></li>
        </ul>
        <ul [class.active]="menuActive">
          <li><a routerLink="auth/register">Register</a></li>
          <li><a routerLink="auth/login">Inicio</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: `
    header {
      background-color: #333;
      color: white;
      padding: 10px 20px;
    }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: auto;
    }
    nav ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
      overflow: hidden;
    }
    li {
      margin: 0 10px;
      cursor: pointer;
    }
    a{
      text-decoration: none;
      color: white;
    }
    a:hover {
      color: #ddd;
    }
    .hamburger {
      display: none;
      font-size: 24px;
      cursor: pointer;
    }
    @media (max-width: 600px) {
      nav ul {
        max-height: 0;
        flex-direction: column;
        align-items: center;
      }

      .hamburger {
        display: block;
      }

      nav ul.active {
        max-height: 300px; /* Ajusta según la cantidad de elementos */
        opacity: 1;
      }

      li {
        margin: 10px 0;
      }
    }
  `
})
export class HeaderComponent {
  menuActive: boolean = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
