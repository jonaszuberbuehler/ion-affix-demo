import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({
    name: 'refresher',
    priority: 'high'
})
@Component({
    templateUrl: 'refresher.html'
})
export class RefresherPage {

    items = Array.from({length: 15}, (value, key) => key);

    doRefresh(refresher) {
        setTimeout(() => {
            refresher.complete();
        }, 2000);
    }
}
