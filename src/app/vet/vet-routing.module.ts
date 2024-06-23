import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetProfileComponent } from './vet-profile/vet-profile.component';
import { HomeComponent } from './home/home.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { CertificationComponent } from './certification/certification.component';

const routes: Routes = [
  { path: 'vet-profile', component: VetProfileComponent }, // Route for VetProfileComponent
  { path: 'home', component: HomeComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'certification', component: CertificationComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VetRoutingModule { }
