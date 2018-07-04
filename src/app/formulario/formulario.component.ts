import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form);
    // console.log(this.usuario);
  }
}
