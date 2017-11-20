
import { Injectable } from '@angular/core';

export interface Item {
  nome: string,
  unidade: string,
  quantidade: number
}

@Injectable()
export class DadosProvider {

  private _dados: Item[] = [];

  constructor() {
    console.log('Hello DadosProvider Provider');
    this._dados = [
      {
        nome: 'Arroz',
        unidade: 'kg',
        quantidade: 4
      },
      {
        nome: 'feijão',
        unidade: 'kg',
        quantidade: 2
      },
      {
        nome: 'Picanha',
        unidade: 'kg',
        quantidade: 10
      },
    ];
  }

  getDados(): Item[] {
    return this._dados;
  }

  deleteItem(item: Item) {
    this._dados.splice(
      this._dados.indexOf(item),
      1
    );
  }

}
