import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item, DadosProvider } from '../../providers/dados/dados';


@IonicPage()
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {

  item: Item = {nome: null, unidade: null, quantidade: null};
  editMode: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dados: DadosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
    let param = this.navParams.get('item');
    if(param) {
      this.item = param;
      this.editMode = true;
    } else {
      this.editMode = false;
    }
  }

  onCancelar() {
    this.navCtrl.setRoot('ListPage');
  }

  onSalvar(){
    if(this.editMode) {
      this.dados.updateItem(this.item);
    } else {
      this.dados.addItem(this.item);
    }
    this.navCtrl.setRoot('ListPage');
  }


}
