import {Injectable} from '@angular/core'
import {CanActivate, Router} from '@angular/router'
import {FirebaseService} from './index'

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private firebaseService: FirebaseService, private router:Router) { }

    canActivate() {
        var currentUser=this.firebaseService.user
        if (!currentUser){
            //DUMMY
            this.firebaseService.login("dominik.mathmann@gedoplan.de", "abc123").subscribe(e => { console.log("DUMMY Login Successfull")});
            //
//            this.router.navigateByUrl('/login')
//            return false;
        }
        
        return true;
    }
}