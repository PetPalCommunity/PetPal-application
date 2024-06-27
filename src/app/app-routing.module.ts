import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './share/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }, 
  { path: 'vet', loadChildren: () => import('./vet/vet.module').then(m => m.VetModule) }, 
  { path: 'petowner', loadChildren: () => import('./petowner/petowner.module').then(m => m.PetownerModule) }, 
  { path: 'community', loadChildren: () => import('./community/community.module').then(m => m.CommunityModule) }, 
  { path: 'share', loadChildren: () => import('./share/share.module').then(m => m.ShareModule) },
  { path: 'pet', loadChildren: () => import('./pet/pet.module').then(m => m.PetModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
