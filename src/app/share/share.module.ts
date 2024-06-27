import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareComponent } from './share.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [
    ShareComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class ShareModule { }
