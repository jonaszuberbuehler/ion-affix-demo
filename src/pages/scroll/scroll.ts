import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({
    name: 'scroll',
    priority: 'high'
})
@Component({
    templateUrl: 'scroll.html'
})
export class ScrollPage {
    items = Array.from({length: 15}, (value, key) => key);

    test() {
        alert('Click handler works!');
    }
}
