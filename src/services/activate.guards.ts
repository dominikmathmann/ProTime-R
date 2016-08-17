import {Injectable} from '@angular/core'
import {CanActivate, Router} from '@angular/router'
import {FirebaseService} from './index'
import {Observable} from 'rxjs'

@Injectable()
export class LoginGuard {
    constructor(private firebaseService: FirebaseService, private router: Router) { }

    canActivate():any {
        var currentUser = this.firebaseService.user
        if (!currentUser) {
            //DUMMY
            var obs: Observable<boolean>=this.firebaseService.login("dominik.mathmann@gedoplan.de", "abc123").map(e => true);
            return obs;
            //
            //            this.router.navigateByUrl('/login')
            //            return false;
        }

        return true;
    }
}