import { FormularioReativoComponent } from './formulario-reativo/formulario-reativo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  { path: 'formularioTemplate', component: FormularioComponent  },
  { path: 'formularioReativo', component: FormularioReativoComponent},
  { path: '', pathMatch: 'full', redirectTo: 'formularioReativo' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
