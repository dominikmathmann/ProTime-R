import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {FirebaseService} from '../../services/index'
import {AppComponent} from '../../app.component'
import {ExceptionService} from '../..//services/index'

@Component({
    template: require('./login.component.html'),
    styles: [require('./login.component.css')],
    providers: []
})
export class LoginComponent {

    constructor(public firebase: FirebaseService, private router:Router, private app:ExceptionService) { }

    login(username: string, password: string) {
        this.firebase.login(username, password).subscribe(data => {
            this.router.navigateByUrl('/')
        }, error => { console.log(error);this.app.error="Login failed"})
    }
}