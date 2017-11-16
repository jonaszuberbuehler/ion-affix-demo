import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({
    name: 'dividers',
    priority: 'high'
})
@Component({
    templateUrl: 'dividers.html'
})
export class DividersPage {

    items = Array.from({length: 15}, (value, key) => key);

    test() {
        alert('Click handler works!');
    }
}

