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

    testDate=new Date();

    endTime: Date;

    updatePoll: Subscription;

    records: Record[];

    ngAfterViewInit() {
        this.loadRecords();
    }

    loadRecords(max = 10) {
        this.recordService.getAll(max).subscribe(records => {
            this.records = records;
        })
    }

    start() {
        this.recordService.record.startTime = new Date();
        this.recordService.createRecording().subscribe(resp => {
            this.updatePoll = Observable.interval(300000).subscribe(
                interval => {
                    this.recordService.record.endTime = new Date();
                    this.recordService.updateRecord().subscribe(
                        updateResponse => { }
                    )
                }
            );
        })
    }

    clear() {
        this.recordService.deleteRecord().subscribe(e => { })
    }

    save() {
        this.recordService.updateRecord().subscribe(e => {
            this.recordService.record = new Record()
            this.loadRecords();
        });
    }

    stop() {
        this.endTime = new Date();
        this.recordService.record.endTime = this.endTime;
        this.updatePoll.unsubscribe();
    }


}