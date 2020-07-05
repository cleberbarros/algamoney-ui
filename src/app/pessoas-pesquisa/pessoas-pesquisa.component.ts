import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent  {

  pessoas = [
    { nome: 'CLÉBER BARROS', cidade: 'Petrolina', estado: 'PE',
      ativo: false},
    { nome: 'Ana carla', cidade: 'Petrolina', estado: 'PE',
    ativo: true},
    { nome: 'bibita gamer', cidade: 'Petrolina', estado: 'PE',
    ativo: true},
    { nome: 'rafita gamer', cidade: 'Petrolina', estado: 'PE',
    ativo: false},
  ];
}
