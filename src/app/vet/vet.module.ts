import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetRoutingModule } from './vet-routing.module';
import { VetComponent } from './vet.component';


@NgModule({
  declarations: [
    VetComponent
  ],
  imports: [
    CommonModule,
    VetRoutingModule
  ]
})
export class VetModule { }
