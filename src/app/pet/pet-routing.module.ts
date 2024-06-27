import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { MedicalHistoryComponent } from './medical-history/medical-history.component'; // Import the MedicalHistoryComponent
import { UpdateProfileComponent } from './update-profile/update-profile.component'; // Import the UpdateProfileComponent

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'pet-profile', component: PetProfileComponent },
  { path: 'update-profile', component: UpdateProfileComponent },
  { path: 'medical-history', component: MedicalHistoryComponent }
  // other routes...
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
