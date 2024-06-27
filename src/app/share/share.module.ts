import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareComponent } from './share.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
=======
>>>>>>> vet


@NgModule({
  declarations: [
    ShareComponent,
    HeaderComponent,
    FooterComponent,
<<<<<<< HEAD
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    
=======
    LandingComponent,
  ],
  imports: [
    CommonModule,
>>>>>>> vet
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class ShareModule { }
