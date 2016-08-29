import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {FirebaseService} from '../../services/index'

@Component({
    template: require('./home.component.html'),
    styles: [require('./home.component.css')],
    providers: []
})
export class HomeComponent {
    constructor(public firebase:FirebaseService, private router:Router){}
    
    
    logout(){
        this.firebase.logout().subscribe(e => { this.router.navigateByUrl("/login")})
    }
}