import { AgendaClientePage } from './../agenda-cliente/agenda-cliente';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-employer',
  templateUrl: 'employer.html',
})
export class EmployerPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public employers: number[] = [1, 2, 3,4];

  public label:string = "Avaliação dos Usuários";

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployerPage');
  }
  starClicked(value){
    console.log("Rated :", value);
 }
 goToAgendaClientePage(){
   this.navCtrl.push(AgendaClientePage);
 }
 goBack(){
   this.navCtrl.pop();
 }
}
