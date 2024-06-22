import { Component } from '@angular/core';

@Component({
  selector: 'app-my-communities',
  templateUrl: './my-communities.component.html',
  styles: `
    p {
      font-size: 1.5rem;
      font-weight: bold;
    }

  `
})
export class MyCommunitiesComponent {
  communities = [
    { name: 'Community 1', description: 'Description of Community 1', image: 'https://unavatar.io/telegram/saelcc03'},
    { name: 'Community 2', description: 'Description of Community 2', image: 'https://unavatar.io/midudev'},
  ];
}
