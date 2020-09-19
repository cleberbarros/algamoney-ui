import { AuthService } from './../seguranca/auth.service';

import { RouterModule } from '@angular/router';
import { PessoaService } from './../pessoas/pessoa.service';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { ToastyModule} from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { LancamentoService } from 'app/lancamentos/lancamento.service';
import {ConfirmationService} from 'primeng/components/common/api';
import { CategoriaService } from 'app/categorias/categoria.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { Title } from '@angular/platform-browser';
import { JwtHelper } from 'angular2-jwt';
import { NaoAutorizadoComponent } from './nao-autorizado.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,
  ],
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent,NaoAutorizadoComponent],
  exports: [
     NavbarComponent,
     ToastyModule,
     ConfirmDialogModule
    ],
  providers: [
    LancamentoService,
    PessoaService,
    ConfirmationService,
    ErrorHandlerService,
    CategoriaService,
    Title,
    AuthService,
    JwtHelper,

    {provide: LOCALE_ID,useValue: 'pt-BR'}

  ]
})
export class CoreModule { }
