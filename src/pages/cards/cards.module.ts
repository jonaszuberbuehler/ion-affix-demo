import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardsPage } from './cards';
import { IonAffixModule } from 'ion-affix';
@NgModule({
    declarations: [
        CardsPage
    ],
    imports: [
        IonicPageModule.forChild(CardsPage),
        IonAffixModule
    ],
    entryComponents: [
        CardsPage
    ]
})
export class CardsPageModule {}
