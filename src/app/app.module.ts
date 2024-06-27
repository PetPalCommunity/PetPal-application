import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { CommunityModule } from './community/community.module';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthInterceptor } from './auth/interceptor/auth.interceptor';
import { PetRoutingModule } from './pet/pet-routing.module';
import { PetownerRoutingModule } from './petowner/petowner-routing.module';


@NgModule({
  declarations: [
    AppComponent
=======
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
>>>>>>> vet
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
<<<<<<< HEAD
    AuthModule,
    CommunityModule,
    FormsModule,
    ReactiveFormsModule,
    PetRoutingModule ,
    PetownerRoutingModule
    
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true},
    provideAnimationsAsync()
    
=======
    CommunityModule,
    
  ],
  providers: [
    provideAnimationsAsync()
>>>>>>> vet
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
