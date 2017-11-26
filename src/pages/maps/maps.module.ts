import { AppModule } from './../../app/app.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsPage } from './maps';

@NgModule({
  declarations: [
    MapsPage,
    AppModule
  ],
  imports: [
    IonicPageModule.forChild(MapsPage),
  ],
})
export class MapsPageModule {}
