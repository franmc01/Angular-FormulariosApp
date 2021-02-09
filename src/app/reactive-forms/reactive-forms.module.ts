import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';


@NgModule({
  declarations: [BasicosComponent, SwitchesComponent, DinamicosComponent],
  imports: [
    CommonModule,
    ReactiveFormsRoutingModule
  ]
})
export class ReactiveFormsModule { }
