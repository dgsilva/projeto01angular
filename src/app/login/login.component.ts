import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AuthenticationHelper } from '../helpers/authentication-helper';
import { Auth } from '../models/auth.models';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  mensagem: string = '';
 
  constructor(
    //inicialização por injeção de dependência
    private authService: AuthService,
    private authHelper: AuthenticationHelper
  ) { }
 
  //declarando o formulário
  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required])
  });
 
  //função para acessar os campos do formulários
  get form(): any {
    return this.formLogin.controls;
  }
 
  ngOnInit(): void {
  }
 
  onSubmit(): void {
 
    this.mensagem = '';
 
    this.authService.post(this.formLogin.value)
      .subscribe(
        (data: any) => {
          //gravar os dados na localstorage
          this.authHelper.signIn(data as Auth);
          //refresh na tela
          location.reload();
        },
        (e: any) => {
          this.mensagem = e.error.mensagem;
        }
      );
  }
}
