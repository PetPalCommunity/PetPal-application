import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetownerComponent } from './petowner.component';
<<<<<<< HEAD
import {HomeComponent} from "./home/home.component";
import {PetownerprofileComponent} from "./petownerprofile/petownerprofile.component";

const routes: Routes = [
  //{ path: 'petowner', component: PetownerComponent },
  { path: 'home', component: HomeComponent },
  {path: 'petownerprofile', component: PetownerprofileComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
=======

const routes: Routes = [{ path: '', component: PetownerComponent }];
>>>>>>> vet

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetownerRoutingModule { }
