import { Component, OnInit } from '@angular/core';
import { AuthenticationHelper } from './helpers/authentication-helper';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  //atributos
  isLoggedIn: boolean = false;
  nomeUsuario: string = '';
  emailUsuario: string = '';
 
  constructor(
    private authHelper: AuthenticationHelper
  ) { }
 
  //método executado sempre que o componente é carregado
  ngOnInit(): void {
 
    this.isLoggedIn = this.authHelper.isAuthenticated();
 
    if (this.isLoggedIn) {
      var auth = this.authHelper.getData();
 
      this.nomeUsuario = auth.nomeUsuario;
      this.emailUsuario = auth.emailUsuario;
    }
  }
 
  //função para fazer o LOGOUT do usuário
  logout(): void {
 
    if (confirm('Deseja realmente encerrar sua sessão?')) {
 
      this.authHelper.signOut();
      location.reload();
    }
 
  }
 
}
 


