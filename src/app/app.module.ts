import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { CommunityModule } from './community/community.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthInterceptor } from './auth/interceptor/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    AuthModule,
    CommunityModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true},
    provideAnimationsAsync()
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
