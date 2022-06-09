import { Injectable } from '@angular/core';
import { Auth } from '../models/auth.models';
 
@Injectable({
    providedIn: 'root'
})
export class AuthenticationHelper {
 
    //atributo
    KEY: string = "USER_AUTH";
 
    //função para gravar os dados de autenticação
    //do usuário na local storage
    signIn(auth: Auth): void {
        var data = JSON.stringify(auth);
        localStorage.setItem(this.KEY, data);
    }
 
    //função para verificar se o usuário está autenticado
    isAuthenticated(): boolean {
        return localStorage.getItem(this.KEY) != null;
    }
 
    //função para retornar o conteudo gravado na localstorage
    getData(): Auth {
        var data = localStorage.getItem(this.KEY) as string;
        return JSON.parse(data) as Auth;
    }
 
    //função para apagar o conteudo gravado
    //na local storage
    signOut(): void {
        //destruir o conteudo gravado
        localStorage.removeItem(this.KEY);
    }
}
