import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonAffixModule } from 'ion-affix';
import { RefresherPage } from './refresher';
@NgModule({
    declarations: [
        RefresherPage
    ],
    imports: [
        IonicPageModule.forChild(RefresherPage),
        IonAffixModule
    ],
    entryComponents: [
        RefresherPage
    ]
})
export class RefresherPageModule {}
