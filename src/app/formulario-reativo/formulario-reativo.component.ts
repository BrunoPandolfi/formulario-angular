import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '../../../node_modules/@angular/forms';
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
    /* this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });*/

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      });
    });
  }

  onSubmit(){
    console.log(this.formulario);
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .pipe(map(res => res))
        .subscribe(dados => {
          console.log(dados)
          //this.resetar();
        });
    
  }

  verificaValidTouched (campo: string){
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  verificaEmailInválido(){ 
    let campoEmail = this.formulario.get('email');
    if (campoEmail.get('email').errors)
    {
      return campoEmail.errors['email']
    }
  }

  aplicaIsValidInvalid(campo: string)
  {
    return {
      'is-valid' : this.verificaValidTouched(campo),
      'is-invalid' : this.verificaValidTouched(campo)
    };
  }

  resetar(){
    this.formulario.reset();
  }
}
