import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '../../../node_modules/@angular/forms';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';

@Component({
  selector: 'app-formulario-reativo',
  templateUrl: './formulario-reativo.component.html',
  styleUrls: ['./formulario-reativo.component.css']
})
export class FormularioReativoComponent implements OnInit {

  formulario: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private http: Http
  ) { }

  ngOnInit() {
    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });*/

    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    });
  }

  onSubmit(){
    console.log(this.formulario.value);
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
             .pipe(map(res => res))
             .subscribe(dados => console.log(dados));
  }
}
