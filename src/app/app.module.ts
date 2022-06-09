import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AuthInterceptor } from './interceptors/auth-inteceptors';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxMaskModule, IConfig } from 'ngx-mask'
 
export const options: null | Partial<IConfig> | (() => Partial<IConfig>) = null;
 
//Componentes criados no projeto
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CadastroEmpresasComponent } from './cadastro-empresas/cadastro-empresas.component';
import { ConsultaEmpresasComponent } from './consulta-empresas/consulta-empresas.component';
import { EdicaoEmpresasComponent } from './edicao-empresas/edicao-empresas.component';
import { LoginComponent } from './login/login.component';
import { CadastroFuncionariosComponent } from './cadastro-funcionarios/cadastro-funcionarios.component';
import { ConsultaFuncionariosComponent } from './consulta-funcionarios/consulta-funcionarios.component';
import { EdicaoFuncionariosComponent } from './edicao-funcionarios/edicao-funcionarios.component';
import { AppRoutingModule } from './app-routing.module'; 

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    CadastroEmpresasComponent,
    ConsultaEmpresasComponent,
    EdicaoEmpresasComponent,
    LoginComponent,
    CadastroFuncionariosComponent,
    ConsultaFuncionariosComponent,
    EdicaoFuncionariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //desenvolvimento de formulários
    ReactiveFormsModule, //desenvolvimento de formulários
    HttpClientModule, //integração com serviços de API
    NgxPaginationModule, //biblioteca para paginação de dados
    Ng2SearchPipeModule, AppRoutingModule, //biblioteca para filtro de busca
    NgxMaskModule.forRoot() //biblioteca para máscara de campos

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
