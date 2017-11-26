import { MapsPage } from './../pages/maps/maps';
import { AgendaClientePageModule } from './../pages/agenda-cliente/agenda-cliente.module';
import { IonRating } from './../pages/ion-rating/ion-rating';
import { IntroPageModule } from './../pages/intro/intro.module';
import { ServicesPage } from './../pages/services/services';
import { EmployerPage } from './../pages/employer/employer';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EmployerPage,
    ServicesPage,
    IonRating,
    MapsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule,
    AgendaClientePageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EmployerPage,
    ServicesPage,
    IonRating,
    MapsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IonRating,
    Geolocation,  
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
