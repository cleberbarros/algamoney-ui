import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NaoAutorizadoComponent } from "./core/nao-autorizado.component";
import { PaginaNaoEncontradaComponent } from "./core/pagina-nao-encontrada.component";
import { PessoasPesquisaComponent } from "./pessoas/pessoas-pesquisa/pessoas-pesquisa.component";

const routes: Routes = [
  {path: '', redirectTo: 'lancamentos', pathMatch:'full'}, //fazendo redirecionamento
  {path: 'pessoas', component: PessoasPesquisaComponent},
  { path: 'nao-autorizado', component: NaoAutorizadoComponent },
  {path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent},
  {path: '**', redirectTo: 'pagina-nao-encontrada'} //qualquer coisa que tente acessar e não exista uma rota configurada
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
