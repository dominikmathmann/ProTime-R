import {Headers, RequestOptions} from '@angular/http'
import {FirebaseService} from '../services/index'

export abstract class BaseService {
    
    protected defaultOptions: RequestOptions;

    constructor(private baseUrl: string, private firebaseService: FirebaseService) { 
        let headers = new Headers({ 'Content-Type': 'application/json' });
        this.defaultOptions = new RequestOptions({ headers: headers });

    }
      
    getFireBaseUserUrl(restPath:string,...params:string[])
    {
        return `${this.baseUrl}userdata/${this.firebaseService.user.uid}/${restPath}.json?auth=${this.firebaseService.authToken}&${params.concat("&")}`;
    }
}