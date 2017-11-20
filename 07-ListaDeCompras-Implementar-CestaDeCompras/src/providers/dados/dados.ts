
import { Injectable } from '@angular/core';

export interface Item {
  nome: string,
  unidade: string,
  quantidade: number,
  naCesta: boolean
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
        quantidade: 4,
        naCesta: false
      },
      {
        nome: 'feijão',
        unidade: 'kg',
        quantidade: 2,
        naCesta: false
      },
      {
        nome: 'Picanha',
        unidade: 'kg',
        quantidade: 10,
        naCesta: false
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

  addItem(item: Item){
    this._dados.push(item);
  }

  updateItem(item: Item) {
    this._dados[this._dados.indexOf(item)] = item;
  }

}
