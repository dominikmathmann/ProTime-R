import {Injectable} from '@angular/core'
import {CanActivate, Router} from '@angular/router'
import {FirebaseService} from './index'

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private firebaseService: FirebaseService, private router:Router) { }

    canActivate():boolean {
        var currentUser=this.firebaseService.user
        if (!currentUser){
            this.router.navigateByUrl('/login')
        }
        
        return currentUser;
    }
}