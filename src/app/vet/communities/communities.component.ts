import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css']
})
export class CommunitiesComponent {
  @Input() communities: { name: string, image: string }[] = [];
  @Input() addCommunity!: () => void;
}

