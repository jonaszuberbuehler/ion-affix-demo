import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({
    name: 'segments',
    priority: 'high'
})
@Component({
    templateUrl: 'segments.html'
})
export class SegmentsPage {

    items = Array.from({length: 15}, (value, key) => key);
    page = 'page1';

    test() {
        alert('Click handler works!');
    }
}
