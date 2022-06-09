import { ConsultaFuncionariosComponent } from './consulta-funcionarios/consulta-funcionarios.component';
import { CadastroFuncionariosComponent } from './cadastro-funcionarios/cadastro-funcionarios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CadastroEmpresasComponent } from './cadastro-empresas/cadastro-empresas.component';
import { ConsultaEmpresasComponent } from './consulta-empresas/consulta-empresas.component';
import { EdicaoEmpresasComponent } from './edicao-empresas/edicao-empresas.component';


//mapeando as rotas do projeto para cada componente
const routes: Routes = [
  { path: '', component: PaginaInicialComponent }, //raiz do projeto
  { path: 'cadastro-empresas', component: CadastroEmpresasComponent },
  { path: 'consulta-empresas', component: ConsultaEmpresasComponent },
  { path: 'edicao-empresas/:id', component: EdicaoEmpresasComponent },
  { path: 'cadastro-funcionarios', component: CadastroFuncionariosComponent},
  { path: 'consulta-funcionarios', component: ConsultaFuncionariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
