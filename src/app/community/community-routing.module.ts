import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: CommunityComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
