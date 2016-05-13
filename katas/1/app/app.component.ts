import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h4>{{successString}}</h4>'
})
export class AppComponent {
    successString = "If you see this, your Angular 2 app is working!";
 }
