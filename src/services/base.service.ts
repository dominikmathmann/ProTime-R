import {Headers, RequestOptions} from '@angular/http'
import {FirebaseService} from '../services/index'

export abstract class BaseService {
    
    protected defaultOptions: RequestOptions;

    constructor(private baseUrl: string, private firebaseService: FirebaseService) { 
        let headers = new Headers({ 'Content-Type': 'application/json' });
        this.defaultOptions = new RequestOptions({ headers: headers });

    }
      
    getFireBaseUrl(restPath:string)
    {
        return this.baseUrl + restPath + ".json?auth=" + this.firebaseService.authToken;
    }
}