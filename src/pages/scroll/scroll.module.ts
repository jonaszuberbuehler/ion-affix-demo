import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonAffixModule } from 'ion-affix';
import { ScrollPage } from './scroll';

@NgModule({
    declarations: [
        ScrollPage
    ],
    imports: [
        IonicPageModule.forChild(ScrollPage),
        IonAffixModule
    ],
    entryComponents: [
        ScrollPage
    ]
})
export class ScrollPageModule {}
