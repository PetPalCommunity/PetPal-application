import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetComponent } from './vet.component';

const routes: Routes = [{ path: '', component: VetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VetRoutingModule { }
