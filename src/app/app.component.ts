import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeadersPage } from '../pages/headers/headers';
import { RefresherPage } from '../pages/refresher/refresher';
import { CardsPage } from '../pages/cards/cards';
import { DividersPage } from '../pages/dividers/dividers';
import { SegmentsPage } from '../pages/segment/segments';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HeadersPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

