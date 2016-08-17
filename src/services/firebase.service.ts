import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'

declare var firebase: any;

@Injectable()
export class FirebaseService {

    private config = {
        apiKey: "AIzaSyBXv57J2eWnEJdc5TCj4RhZ1oGeHPRS1rI",
        authDomain: "timetable-b10ed.firebaseapp.com",
        databaseURL: "https://timetable-b10ed.firebaseio.com",
        storageBucket: "timetable-b10ed.appspot.com",
    };

    public user: any;
    public authToken: string;
    
    constructor(){
        firebase.initializeApp(this.config);
    }

    public login(username: string, password: string): Observable<any> {
        var observer = Observable.from(firebase.auth().signInWithEmailAndPassword(username, password)).do((e: any) => { this.user = e; console.log(e); this.authToken = e.cd }).map((data: any) => { return data.cd; });
        return observer;
    }

    public logout() {
        this.user=undefined;
        return Observable.from(firebase.auth().signOut());
    }
}
