import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }, { path: 'vet', loadChildren: () => import('./vet/vet.module').then(m => m.VetModule) }, { path: 'petowner', loadChildren: () => import('./petowner/petowner.module').then(m => m.PetownerModule) }, { path: 'community', loadChildren: () => import('./community/community.module').then(m => m.CommunityModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
