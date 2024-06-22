import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styles: [`
    .post-card {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      margin: 1rem 0;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: #f9f9f9;
    }

    .post-info {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }

    .author-image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 1rem;
    }

    .text-info {
      display: flex;
      flex-direction: column;
    }

    .post-info h3 {
      margin: 0;
      font-size: 1.2rem;
    }

    .post-info span {
      color: #777;
      margin: 0.5rem 0;
    }

    .post-info p {
      margin: 0.5rem 0 0;
      color: #555;
    }

    .post-info a {
      color: #007bff;
      cursor: pointer;
    }

    .post-info a:hover {
      text-decoration: underline;
    }

    .post-image {
      width: 100%;
      border-radius: 8px;
    }
  `]
})
export class PostCardComponent {
  @Input() post: any;
  showFullDescription = false;

  toggleDescription(event: Event): void {
    event.preventDefault();
    this.showFullDescription = !this.showFullDescription;
  }
}