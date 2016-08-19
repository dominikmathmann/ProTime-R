import {Component} from '@angular/core'
import {RecordService} from '../../services/index'
import {NavButtonPanelComponent, DateInputComponent} from '../shared/index'
import {Record} from '../../models/index'
import {Observable, Subscription} from 'rxjs'

declare var require: any

@Component({
    template: require('./recording.component.html'),
    styles: [require('./recording.component.css')],
    providers: [],
    directives: [NavButtonPanelComponent, DateInputComponent]
})
export class RecordingComponent {

    constructor(private recordService: RecordService) {
    }

    endTime: number;

    updatePoll: Subscription;

    records: Record[];

    currentTableLimit = 10;

    ngAfterViewInit() {
        this.loadRecords();
    }

    loadRecords() {
        this.recordService.getAll(this.currentTableLimit).subscribe(records => {
            this.records = records;
        })
    }

    start() {
        this.recordService.record.startTime = new Date().getTime();
        this.recordService.createRecording().subscribe(resp => {
            this.updatePoll = Observable.interval(300000).subscribe(
                interval => {
                    this.recordService.record.endTime = new Date().getTime();
                    this.recordService.updateRecord().subscribe(
                        updateResponse => { }
                    )
                }
            );
        })
    }

    clear() {
        this.recordService.deleteRecord().subscribe(e => {
            this.loadRecords();
            this.emptyForm();
        })
    }

    emptyForm() {
        this.recordService.record = new Record()
        this.endTime = undefined;
    }

    edit(record: Record) {
        this.endTime = record.endTime;
        this.recordService.record = record;
    }

    save() {
        this.recordService.updateRecord().subscribe(e => {
            this.emptyForm();
            this.loadRecords();
        });
    }

    stop() {
        this.endTime = new Date().getTime();
        this.recordService.record.endTime = this.endTime;
        if (this.updatePoll) this.updatePoll.unsubscribe();
    }

    more() {
        this.currentTableLimit *= 2;
        this.loadRecords();
    }


}