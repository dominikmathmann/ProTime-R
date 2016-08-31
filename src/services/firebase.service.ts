import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'

declare var firebase: any;

@Injectable()
export class FirebaseService {

    private config = {
        apiKey: "AIzaSyDGu_szYqNMsAmiD0Fy1yDnOJSrBWdC1IY",
        authDomain: "protime-r.firebaseapp.com",
        databaseURL: "https://protime-r.firebaseio.com",
        storageBucket: "protime-r.appspot.com",
    };

    public user: any;
    public authToken: string;

    public refreshToken() {
        this.user.getToken(true).then((e: any) => {
            this.authToken = e;
        })
    }

    constructor() {
        firebase.initializeApp(this.config);
    }

    public login(username: string, password: string): Observable<any> {
        var observer = Observable.from(firebase.auth().signInWithEmailAndPassword(username, password)).do((e: any) => { this.user = e; this.authToken = e.cd }).map((data: any) => { return data.cd; });
        return observer;
    }

    public logout() {
        this.user = undefined;
        return Observable.from(firebase.auth().signOut());
    }
}
