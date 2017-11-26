import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendaClientePage } from './agenda-cliente';

@NgModule({
  declarations: [
    AgendaClientePage,
  ],
  imports: [
    IonicPageModule.forChild(AgendaClientePage),
  ],
})
export class AgendaClientePageModule {

  public myDate :Date = new Date();
}
