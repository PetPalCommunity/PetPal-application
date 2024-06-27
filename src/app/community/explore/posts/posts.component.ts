import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  template: `
    <div class="">
      <app-post-card *ngFor="let post of posts" [post]="post"></app-post-card>
    </div>
  `,
  styles: [`
  `]
})
export class PostsComponent implements OnInit {
  posts = [
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
  ];

  constructor() { }

  ngOnInit(): void { }
}
