import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioReativoComponent } from './formulario-reativo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    HttpModule
  ],
  declarations: [
    FormularioReativoComponent
  ]
})
export class FormularioReativoModule { }
