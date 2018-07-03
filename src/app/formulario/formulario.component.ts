import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  clicked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  isClicked(){
    this.clicked = true;
  }

  onSubmit(form){
    console.log(form);
  }
}
