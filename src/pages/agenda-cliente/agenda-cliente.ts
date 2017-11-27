import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AgendaClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda-cliente',
  templateUrl: 'agenda-cliente.html',
})
export class AgendaClientePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaClientePage');
  }
  public event = {
    month: '2017-11-27',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
}
