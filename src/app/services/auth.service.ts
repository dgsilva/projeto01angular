import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  //ENDPOINT da API
  endpoint: string = environment.apiUrl + "/login";
 
  constructor(
    private httpClient: HttpClient
  ) { }
 
  //função para realizar uma chamada HTTP POST para a API
  post(auth: any) {
    return this.httpClient.post(this.endpoint, auth);
  }
}
