import { NgModule } from '@angular/core';
import { HeadersPage } from './headers';
import { IonicPageModule } from 'ionic-angular';
import { IonAffixModule } from 'ion-affix';
@NgModule({
    declarations: [
        HeadersPage
    ],
    imports: [
        IonicPageModule.forChild(HeadersPage),
        IonAffixModule
    ],
    entryComponents: [
        HeadersPage
    ]
})
export class HeadersPageModule {}
