import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioReativoComponent } from './formulario-reativo.component';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpModule } from '../../../node_modules/@angular/http';

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
