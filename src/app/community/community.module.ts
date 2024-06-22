import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { CommunityComponent } from './community.component';
import { MyCommunitiesComponent } from './my-communities/my-communities.component';
import { CommunityCardComponent } from './community-card/community-card.component';
import { PostsComponent } from './posts/posts.component';
import { PostCardComponent } from './post-card/post-card.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    CommunityComponent,
    MyCommunitiesComponent,
    CommunityCardComponent,
    PostsComponent,
    PostCardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CommunityRoutingModule
  ]
})
export class CommunityModule { }
