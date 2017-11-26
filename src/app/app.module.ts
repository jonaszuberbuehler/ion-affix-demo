import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonAffixModule} from 'ion-affix'

import { MyApp } from './app.component';
import { DividersPageModule } from '../pages/dividers/dividers.module';
import { CardsPageModule } from '../pages/cards/cards.module';
import { HeadersPageModule } from '../pages/headers/headers.module';
import { SegmentsPageModule } from '../pages/segment/segments.module';
import { RefresherPageModule } from '../pages/refresher/refresher.module';
import { ScrollPageModule } from '../pages/scroll/scroll.module';

@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp, {
            mode: 'ios'
        }),
        IonAffixModule,
        DividersPageModule,
        CardsPageModule,
        HeadersPageModule,
        SegmentsPageModule,
        RefresherPageModule,
        ScrollPageModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
