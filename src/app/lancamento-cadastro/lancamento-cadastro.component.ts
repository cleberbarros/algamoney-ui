import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  selecionado: string;

  tipos = [
    {label:'Receita',value:'RECEITA' },
    {label:'Despesa',value:'DESPESA' },
  ];

  categorias = [
    {label: 'Alimentação', value: 1},
    {label: 'Transporte', value: 2}
  ];

  pessoas = [
    {label: 'João da Silva', value: 1},
    {label: 'Sebastioão Souza', value: 2},
    {label: 'Maria Abadia', value: 3}
  ];

  constructor() {

  }

  ngOnInit(): void {
  }

}
