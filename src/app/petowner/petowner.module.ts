import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetownerRoutingModule } from './petowner-routing.module';
import { PetownerComponent } from './petowner.component';


@NgModule({
  declarations: [
    PetownerComponent
  ],
  imports: [
    CommonModule,
    PetownerRoutingModule
  ]
})
export class PetownerModule { }
