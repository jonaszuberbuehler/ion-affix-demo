import { Component, ViewChild } from '@angular/core';
import { ActionSheetController, IonicPage } from 'ionic-angular';

@IonicPage({
    name: 'headers',
    priority: 'high'
})
@Component({
    templateUrl: 'headers.html'
})
export class HeadersPage {
    @ViewChild('content') content;

    items = Array.from({length: 15}, (value, key) => key);

    constructor(public actionSheetCtrl: ActionSheetController) {
    }

    test() {
        alert('Click handler works!');
    }

    sticky(event) {
        console.log(event.affix);
    }

    showActions() {
        this.actionSheetCtrl.create({
            title: 'Actions',
            buttons: [
                {
                    text: 'Scroll to top',
                    handler: () => this.scrollToTop()
                }
            ]
        }).present();
    }

    private scrollToTop() {
        this.content.scrollToTop();
    }
}
