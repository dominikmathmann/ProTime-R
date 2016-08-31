import {Injectable, Inject} from '@angular/core'
import {Http} from '@angular/http'
import {Record} from '../models/index'
import {BaseService} from './base.service'
import {FirebaseService} from '../services/index'

import {Observable, Subscription} from 'rxjs'

@Injectable()
export class RecordService extends BaseService {

    private _record: Record;

    running: boolean;

    updatePoll: Subscription;

    startUpdatePolling() {
        this.updatePoll = Observable.interval(300000).subscribe(
            interval => {
                this.record.endTime = new Date().getTime();
                this.updateRecord().subscribe(
                    updateResponse => { }
                )
            }
        );
    }

    stopUpdatePolling() {
        if (this.updatePoll) this.updatePoll.unsubscribe();
    }

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
        let url = this.getFireBaseUserUrl(`record/${record.id}`);
        this.fb.refreshToken();
        return this.http.put(url, JSON.stringify(record), this.defaultOptions);
    }

    getAll(limit = 10): Observable<Record[]> {
        return this.http.get(this.getFireBaseUserUrl(`record`, `limitToLast=${limit}`, `orderBy="$key"`))
            .map(r => {
                var jsonResponse = r.json();
                return !jsonResponse ? null : Object.keys(jsonResponse).map(key => {
                    return this.parseRecord(jsonResponse, key);
                })
                    .sort((a, b) => a.id > b.id ? -1 : 1)
            });

    }

    query(project = "", from = 0, to = Number.MAX_SAFE_INTEGER): Observable<Record[]> {
        return this.http.get(this.getFireBaseUserUrl(`record`, `startAt=${from}`, `endAt=${to}`, `orderBy="startTime"`))
            .map(r => {
                var jsonResponse = r.json();
                return !jsonResponse ? null : Object.keys(jsonResponse).map(key => {
                    return this.parseRecord(jsonResponse, key);
                })
                    .sort((a, b) => a.id > b.id ? -1 : 1)
                    .filter(r => r.project.startsWith(project));
            });
    }

    private parseRecord(jsonResponse: {}, key: string) {
        var record: Record = jsonResponse[key];
        record.id = key;
        return record;
    }
}
