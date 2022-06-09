import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  //ENDPOINT da API
  endpoint: string = environment.apiUrl + "/funcionarios";
 
  constructor(
    //inicialização por injeção de dependência
    private httpClient: HttpClient
  ) { }
 
  //função para realizar uma chamada POST para API
  post(funcionario: any) {
    return this.httpClient.post(this.endpoint, funcionario);
  }
 
}
