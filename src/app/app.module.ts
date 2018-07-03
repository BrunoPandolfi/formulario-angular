import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TabelaDadosComponent } from './tabela-dados/tabela-dados.component';
import { FormularioReativoComponent } from './formulario-reativo/formulario-reativo.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TabelaDadosComponent,
    FormularioReativoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
