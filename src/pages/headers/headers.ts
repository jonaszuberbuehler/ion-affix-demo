import { Component, ViewChild } from '@angular/core';
import { Content, IonicPage } from 'ionic-angular';
import { IonAffix } from 'ion-affix';

@IonicPage({
    name: 'headers',
    priority: 'high'
})
@Component({
    templateUrl: 'headers.html'
})
export class HeadersPage {
    @ViewChild('header', {read: IonAffix}) ionAffix;

    items = Array.from({length: 15}, (value, key) => key);

    test() {
        alert('Click handler works!');
    }

    sticky(event) {
        console.log(event.affix);
    }

    scrollToTop(content: Content) {
        content.scrollToTop();
    }
}
