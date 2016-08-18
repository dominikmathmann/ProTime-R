import {Injectable} from '@angular/core'
import {CanActivate, Router} from '@angular/router'
import {FirebaseService} from './index'
import {Observable} from 'rxjs'

@Injectable()
export class LoginGuard {
    constructor(private firebaseService: FirebaseService, private router: Router) { }

    canActivate(): any {
        var currentUser = this.firebaseService.user
        if (!currentUser) {
            this.router.navigateByUrl('/login')
            return false;
        }

        return true;
    }
}

@Injectable()
export class AutoLoginGuard {
    constructor(private firebaseService: FirebaseService, private router: Router) { }

    canActivate(): any {
        var currentUser = this.firebaseService.user
        if (!currentUser) {
            var obs: Observable<boolean> = this.firebaseService.login("xxx", "xxx").map(e => true);
            return obs;
        }

        return true;
    }
}
