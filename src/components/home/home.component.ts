import {Component} from '@angular/core'
import {FirebaseService} from '../../services/index'

@Component({
    template: require('./home.component.html'),
    styles: [require('./home.component.css')],
    providers: []
})
export class HomeComponent {
    constructor(public firebase:FirebaseService){}
}