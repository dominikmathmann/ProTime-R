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
    
    public authToken:string;
    
    public login(username: string, password: string): Observable<any> {
        firebase.initializeApp(this.config);
        return Observable.from(firebase.auth().signInWithEmailAndPassword(username, password)).map( (data:any) => {return data.cd;});
    }

    public logout() {
        firebase.unauth();
    }
}
