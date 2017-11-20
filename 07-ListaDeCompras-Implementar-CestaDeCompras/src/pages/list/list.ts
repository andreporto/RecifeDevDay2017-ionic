import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { DadosProvider, Item } from '../../providers/dados/dados';
import { ItemSliding } from 'ionic-angular/components/item/item-sliding';


@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  public lista: Item[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dados: DadosProvider) {
      this.lista = dados.getDados();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
    this.lista = this.dados.getDados();
  }

  onDelete(item: Item) {
    this.dados.deleteItem(item);
  }

  onAdd() {
    this.navCtrl.setRoot('ItemPage');
  }

  onUpdate(item:Item) {
    this.navCtrl.setRoot('ItemPage',{'item':item});
  }

  onCesta(item: Item) {
    item.naCesta = !item.naCesta;
    this.dados.updateItem(item);
  }

  close(slide: ItemSliding) {
    slide.close();
  }

}
