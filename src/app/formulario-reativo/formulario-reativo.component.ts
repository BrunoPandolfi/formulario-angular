import { DropdownService } from '../shared/services/dropdown.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { EstadoBr } from '../shared/models/estado-br';

@Component({
  selector: 'app-formulario-reativo',
  templateUrl: './formulario-reativo.component.html',
  styleUrls: ['./formulario-reativo.component.css']
})
export class FormularioReativoComponent implements OnInit {

  formulario: FormGroup;
  estados: EstadoBr[];

  constructor(
    private formBuilder: FormBuilder,
    private http: Http,
    private dropdownService: DropdownService
  ) { }

  ngOnInit() {

    this.dropdownService.getEstadosBr()
        .subscribe(dados => {this.estados = dados; console.log(dados);});

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
      })
    });
  }

  onSubmit() {
    console.log(this.formulario);
    if (this.formulario.valid)
    {
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .pipe(map(res => res))
      .subscribe(dados => {
        console.log(dados);
        // this.resetar();
      });
    }
    else{
      console.log('formulario inválido');
      this.verificaValidacoesForm (this.formulario);
    }
  }

  verificaValidacoesForm(formgroup: FormGroup)
  {
    Object.keys(formgroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formgroup.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup)
      {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  verificaValidTouched (campo: string){
    return !this.formulario.get(campo).valid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)  ;
  }

  verificaEmailInvalido(){
    const campoEmail = this.formulario.get('email');
    if (campoEmail.errors)
    {
      return campoEmail.errors['email'];
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

  consultaCEP()
  {
    let cep = this.formulario.get('endereco.cep').value;
    console.log(cep);

    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    // Verifica se campo cep possui valor informado.
    if (cep != '')
    {
        // Expressão regular para validar o CEP.
        const validacep = /^[0-9]{8}$/;

        // Valida o formato do CEP.
        if(validacep.test(cep)) {

          this.resetaDadosForm();

          this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .pipe(map(dados => dados.json()))
          .subscribe(dados => this.populaDadosForm(dados));
        }
    }
  }

  populaDadosForm(dados)
  {
    this.formulario.patchValue({
      endereco:{
        cep: dados.cep,
        complemento: dados.complemento ,
        rua: dados.logradouro,
        bairro: dados.bairro ,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm(){
    this.formulario.patchValue({
      endereco: {
        cep: null,
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}
