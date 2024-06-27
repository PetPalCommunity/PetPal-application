import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommunityService } from '../community.service';
import { CommunityResponse } from '../interfaces/community.interface';
import { CommunityRequest } from '../interfaces/community.interface';
import { CreateFormComponent } from '../create-form/create-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  community: CommunityResponse | null = null;

  constructor(
    private communityService: CommunityService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchCommunity('Community'); // Example community name
  }

  fetchCommunity(name: string): void {
    this.communityService.getCommunity(name).subscribe(
      (data: CommunityResponse) => {
        this.community = data;
      },
      (error:any) => {
        console.error('Error fetching community data:', error);
      }
    );
  }

  followCommunity(): void {
    alert('Followed');
  }

  addCommunity(): void {
    const dialogRef = this.dialog.open(CreateFormComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createCommunity(result);
      }
    });
  }

  createCommunity(newCommunity: CommunityRequest): void {
    this.communityService.createCommunity(newCommunity).subscribe(
      (response: CommunityResponse) => {
        this.fetchCommunity(newCommunity.name); // Refresh the community data
      },
      (error: any) => {
        console.error('Error creating community:', error);
      }
    );
  }
}
