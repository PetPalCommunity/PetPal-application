import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VetRoutingModule } from './vet-routing.module';
import { VetProfileComponent } from './vet-profile/vet-profile.component';
import { CommunitiesComponent } from './communities/communities.component';
import { GalleryComponent } from './gallery/gallery.component';
import { VetHeaderComponent } from './vet-header/vet-header.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentDialogComponent } from './appointment-dialog/appointment-dialog.component';
import { ProfileSummaryComponent } from './profile-summary/profile-summary.component';
import { CertificationComponent } from './certification/certification.component'; // Import CertificationComponent
import { SimpleHeaderComponent } from '../share/simple-header/simple-header.component'; // Import SimpleHeaderComponent
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    VetProfileComponent,
    CommunitiesComponent,
    GalleryComponent,
    VetHeaderComponent,
    HomeComponent,
    PostComponent,
    AppointmentsComponent,
    AppointmentDialogComponent,
    ProfileSummaryComponent,
    CertificationComponent, // Declare CertificationComponent
    SimpleHeaderComponent // Declare SimpleHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    VetRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class VetModule { }
