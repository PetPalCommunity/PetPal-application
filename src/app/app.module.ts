import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { CommunityModule } from './community/community.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { VetProfileComponent } from './vet-profile/vet-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    VetProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    CommunityModule,
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
