import {Injectable, Inject} from '@angular/core'
import {Http, Headers, RequestOptions} from '@angular/http'
import {Record} from '../models/index'
import {BaseService} from './base.service'
import {FirebaseService} from '../services/index'

import {Observable} from 'rxjs'

@Injectable()
export class RecordService extends BaseService{
    constructor(private http: Http, @Inject('rest-url') baseUrl: string, public fb: FirebaseService) { 
        super(baseUrl, fb);
    }

    startRecording(project: number, description?: string): Observable<any> {
        var record = new Record(project, description);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.getFireBaseUserUrl("record"), JSON.stringify(record), options).map(e => e.json());
    }
}