import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationHelper } from "../helpers/authentication-helper";
import { environment } from "src/environments/environment";
 
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
 
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
 
    constructor(
        private authHelper: AuthenticationHelper
    ) {
    }
 
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
        //mapeando os endpoints que não precisam de token
        if (!request.url.includes(environment.apiUrl + '/login')) {
 
            //enviando o token no cabeçalho da requisição
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + this.authHelper.getData().accessToken
                }
            })
 
        }
 
        return next.handle(request);
    }
}
