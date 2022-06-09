import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmpresasService } from '../services/empresas.service';
import { FuncionariosService } from '../services/funcionarios.service';
 
@Component({
  selector: 'app-cadastro-funcionarios',
  templateUrl: './cadastro-funcionarios.component.html',
  styleUrls: ['./cadastro-funcionarios.component.css']
})
export class CadastroFuncionariosComponent implements OnInit {
 
  //atributos
  empresas: any[] = [];
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';
 
  constructor(
    //inicializando por meio de injeção de dependência
    private empresasService: EmpresasService,
    private funcionariosService: FuncionariosService
  ) { }
 
  //definindo o formulário
  formCadastro = new FormGroup({
 
    //campo 'nome'
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(150)
    ]),
 
    //campo 'cpf'
    cpf: new FormControl('', [
      Validators.required
    ]),
 
    //campo 'dataAdmissao'
    dataAdmissao: new FormControl('', [
      Validators.required
    ]),
 
    matricula: new FormControl('', [
      Validators.required
    ]),
 
    idEmpresa: new FormControl('', [
      Validators.required
    ]),
  })
 
  //função para acessar as validações do formulário
  get form(): any {
    return this.formCadastro.controls;
  }
 
  //evento executado quando o componente é renderizado
  ngOnInit(): void {
    this.obterEmpresas();
  }
 
  //função para consultar as empresas da API
  obterEmpresas(): void {
    this.empresasService.getAll()
      .subscribe(
        (data) => { //capturando a resposta de sucesso
          this.empresas = data as any[];
        },
        (e) => { //capturando a resposta de erro
          console.log(e);
        }
      )
  }
 
  //função para processar o SUBMIT do formulário
  onSubmit(): void {
 
    this.mensagem_sucesso = '';
    this.mensagem_erro = '';
 
    this.funcionariosService.post(this.formCadastro.value)
      .subscribe(
        (data: any) => {
          this.mensagem_sucesso = data.mensagem;
          this.formCadastro.reset();
        },
        (e: any) => {
          this.mensagem_erro = e.error.mensagem;
        }
      )
 
  }
 
}
 
