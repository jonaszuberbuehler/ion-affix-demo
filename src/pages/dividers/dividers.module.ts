import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonAffixModule } from 'ion-affix';
import { DividersPage } from './dividers';
@NgModule({
    declarations: [
        DividersPage
    ],
    imports: [
        IonicPageModule.forChild(DividersPage),
        IonAffixModule
    ],
    entryComponents: [
        DividersPage
    ]
})
export class DividersPageModule {}
