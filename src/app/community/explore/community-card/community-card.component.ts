import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-community-card',
  template: `
    <div class="community-card">
      <img [src]="community.image" alt="Community Image">
      <div class="community-info">
        <h3>{{community.name}}</h3>
        <p>{{community.description}}</p>
      </div>
    </div>
  `,
  styles: [`
    .community-card {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 1rem;
      margin: 1rem 0;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: #f9f9f9;
      flex-wrap: wrap; /* Para que el contenido se ajuste en pantallas pequeñas */
    }

    .community-card img {
      width: 20%; /* Ajusta el tamaño de la imagen */
      max-width: 150px;
      height: auto;
      border-radius: 50%;
      margin-right: 1rem;
      flex-shrink: 0;
    }

    .community-info {
      flex: 1;
      min-width: 200px; /* Asegura que la información tenga un ancho mínimo */
    }

    .community-info h3 {
      margin: 0;
      font-size: 1.5rem;
    }

    .community-info p {
      margin: 0.5rem 0 0;
      color: #555;
    }

    @media (max-width: 600px) {
      .community-card {
        flex-direction: column;
        text-align: center;
      }

      .community-card img {
        margin-right: 0;
        margin-bottom: 1rem;
        width: 50%;
      }
    }
  `]
})
export class CommunityCardComponent {
  @Input() community: any;
}
