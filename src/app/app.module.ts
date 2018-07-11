import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaDadosComponent } from './tabela-dados/tabela-dados.component';
import { FormularioModule } from './formulario/formulario.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioReativoModule } from './formulario-reativo/formulario-reativo.module';

@NgModule({
  declarations: [
    AppComponent,
    TabelaDadosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FormularioModule,
    ReactiveFormsModule,
    FormularioReativoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
