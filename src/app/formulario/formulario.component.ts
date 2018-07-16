import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


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

  constructor(
    private http: Http,
    private cepService: ConsultaCepService
  ) { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form);
    // console.log(this.usuario);
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
             .pipe(map(res => res))
             .subscribe(dados => console.log(dados));
  }

  verificaValidTouched (campo){
    return !campo.valid && campo.touched;
  }

  aplicaIsValid (campo)
  {
    return {
      'is-valid' : campo.valid
    };
  }

  consultaCEP(cep, form)
  {
    // console.log(cep);
    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

     // Verifica se campo cep possui valor informado.
     if (cep != null && cep !== '')
     {
        this.cepService.consultaCEP(cep)
            .subscribe(dados => this.populaDadosForm(dados, form));
     }
  }

  populaDadosForm(dados, formulario)
  {
    /*formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento ,
        rua: dados.logradouro,
        bairro: dados.bairro ,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });*/

    formulario.form.patchValue({
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

  resetaDadosForm(formulario){
    formulario.form.patchValue({
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
