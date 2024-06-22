import { Component, Input } from '@angular/core';

let community = {
  name: 'Gatitos ninja',
  description: 'Una poderosa y terrible comunidad gatuna que quiere gobernar el mundo mew 😼😼. Nos reunimos por las noches para poner a pelear a nuestros gatos 💀 Okno',
  img: 'https://wakyma.com/blog/wp-content/uploads/2017/11/los-gatos-son-ninjas-y-este-fotografo-japones-lo-prueba.png',
  followers: 12,
  posts: [
    {
      authorImage: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Casper',
      authorName: 'Trixy',
      publishDate: new Date(),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      postImage: 'https://i.ytimg.com/vi/6VOYBF-ivbM/maxresdefault.jpg'
    },
    {
      authorImage: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Sassy',
      authorName: 'Casper',
      publishDate: new Date(),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      postImage: 'https://i.ytimg.com/vi/d37PY7wv4aE/sddefault.jpg'
    }
  ]
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {
  followCommunity() {
    alert('Followed');
  }
  @Input() community: any;
  constructor() {
    this.community = community;
  }
}
