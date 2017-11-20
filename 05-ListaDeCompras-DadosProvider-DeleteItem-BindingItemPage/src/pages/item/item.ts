import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../providers/dados/dados';


@IonicPage()
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {

  item: Item = {nome: null, unidade: null, quantidade: null};
  editMode: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    //TODO
  }


}
