import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityComponent } from './community.component';
import { MyCommunitiesComponent } from './explore/my-communities/my-communities.component';
import { CommunityCardComponent } from './explore/community-card/community-card.component';
import { PostsComponent } from './explore/posts/posts.component';
import { PostCardComponent } from './explore/post-card/post-card.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateFormComponent } from './create-form/create-form.component';  // Import FormsModule
import { MatDivider } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CommunityRoutingModule } from './community-routing.module';


@NgModule({
  declarations: [
    CommunityComponent,
    MyCommunitiesComponent,
    CommunityCardComponent,
    PostsComponent,
    PostCardComponent,
    HomeComponent,
    ExploreComponent,
    CreateFormComponent,
  ],
  imports: [
    MatButtonModule,
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    CommunityRoutingModule,
    MatDialogModule,
    MatLabel,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatDivider,
  ]
})
export class CommunityModule { }
