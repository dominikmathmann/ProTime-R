import {Injectable, Inject} from '@angular/core'
import {Http} from '@angular/http'
import {Record} from '../models/index'
import {BaseService} from './base.service'
import {FirebaseService} from '../services/index'

import {Observable} from 'rxjs'

@Injectable()
export class RecordService extends BaseService {

    private _record: Record;

    get record() {
        if (!this._record) this._record = new Record();
        return this._record;
    }

    set record(r: Record) { this._record = r };


    constructor(private http: Http, @Inject('rest-url') baseUrl: string, public fb: FirebaseService) {
        super(baseUrl, fb);
    }

    createRecording(): Observable<any> {
        return this.http.post(this.getFireBaseUserUrl("record"), JSON.stringify(this.record), this.defaultOptions)
            .map(e => e.json())
            .do(json => this._record.id = json.name);
    }

    deleteRecord(id = this.record.id): Observable<any> {
        return this.http.delete(this.getFireBaseUserUrl(`record/${id}`)).do(e => { this.record = undefined; })
    }

    updateRecord(record = this.record) {
        return this.http.put(this.getFireBaseUserUrl(`record/${record.id}`), JSON.stringify(record), this.defaultOptions);
    }

    getAll(limit = 10): Observable<Record[]> {
        return this.http.get(this.getFireBaseUserUrl(`record`, `limit=${limit}`))
            .map(r => {
                var jsonResponse = r.json();
                return Object.keys(jsonResponse).map(key => {
                    var record: Record = jsonResponse[key];
                    record.id = key;
                    return record;
                })
                    .reverse()
            });

    }
}
