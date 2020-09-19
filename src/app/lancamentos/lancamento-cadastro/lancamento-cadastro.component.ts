import { LancamentoService } from './../lancamento.service';
import { FormControl } from '@angular/forms';
import { Lancamento } from '../../core/model';
import { PessoaService } from './../../pessoas/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'app/categorias/categoria.service';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { ToastyService } from 'ng2-toasty';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

  categorias = [];
  pessoas = [];
  lancamento = new Lancamento();

  constructor(
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
    private lancamentoService: LancamentoService,
    private erroHandler:ErrorHandlerService,
    private toasty: ToastyService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
   const codigoLancamento = this.route.snapshot.params['codigo'];

   this.title.setTitle('Novo Lançamento') ;

    if(codigoLancamento){
        this.carregarLancamento(codigoLancamento);
    }

    this.carregarCategorias();
    this.carregarPessoas();
  }

  get editando(){
    return Boolean(this.lancamento.codigo)
  }

  carregarLancamento(codigo: number){
    this.lancamentoService.buscarPorCodigo(codigo)
      .then(lancamento => {
        this.lancamento = lancamento;
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.erroHandler.handle(erro));
  }

  salvar(form: FormControl){
      if(this.editando){
        this.atualizarLancamento(form);
      }else{
        this.adicionarLancamento(form);
      }
  }

  adicionarLancamento(form: FormControl){
    this.lancamentoService.adicionar(this.lancamento)
     .then ( lancamentoAdicionado => {
       this.toasty.success('Lançamento add com sucesso!');

      //  form.reset();
      //  this.lancamento = new Lancamento();
      this.router.navigate(['/lancamentos', lancamentoAdicionado.codigo]);  //fazendo navegação imperativa
     })
     .catch(erro => this.erroHandler.handle(erro));
  }

  atualizarLancamento(form: FormControl){
    this.lancamentoService.atualizar(this.lancamento)
      .then( lancamento =>{
        this.lancamento = lancamento;

        this.toasty.success('Lançamento alterado com sucesso!');
        this.atualizarTituloEdicao();
      })
       .catch(erro => this.erroHandler.handle(erro));
  }

  carregarPessoas() {
    this.pessoaService.listarTodas()
      .then(pessoas => {
        this.pessoas = pessoas
          .map(p => ({ label: p.nome, value: p.codigo }));
      })
      .catch(erro => this.erroHandler.handle(erro));
  }



  carregarCategorias(){
    return this.categoriaService.listarTodas()
     .then(categorias =>{
        this.categorias = categorias.map( c => {
          return {label: c.nome, value: c.codigo};
        });
     })
     .catch(erro => this.erroHandler.handle(erro));
  }

  novo(form: FormControl){
    form.reset();
    this.lancamento = new Lancamento();

    this.router.navigate(['/lancamentos/novo']);
  }

  atualizarTituloEdicao(){
    this.title.setTitle(`Edição de lançamento: ${this.lancamento.descricao} `);
  }

}
