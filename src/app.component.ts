import {Component} from '@angular/core'
import {FirebaseService} from './services/index'

@Component({
    template: require('./app.component.html'),
    selector: 'timetable-app',
})
export class AppComponent {
    
    error:string;
    
    constructor(public firebase: FirebaseService) { }
}