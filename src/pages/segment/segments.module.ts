import { NgModule } from '@angular/core';
import { SegmentsPage } from './segments';
import { IonicPageModule } from 'ionic-angular';
import { IonAffixModule } from 'ion-affix';
@NgModule({
    declarations: [
        SegmentsPage
    ],
    imports: [
        IonicPageModule.forChild(SegmentsPage),
        IonAffixModule
    ],
    entryComponents: [
        SegmentsPage
    ]
})
export class SegmentsPageModule {}
