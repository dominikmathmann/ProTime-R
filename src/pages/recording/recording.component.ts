import {Component} from '@angular/core'
import {RecordService} from '../../services/index'
import {NavButtonPanelComponent, DateInputComponent} from '../../components/index'
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

    updatePoll: Subscription;

    records: Record[];

    currentTableLimit = 10;
    
    set running(r:boolean){
        this.recordService.running=r;
    }
    
    get running(){
        return this.recordService.running;
    }

    ngAfterViewInit() {
        this.loadRecords();
    }

    loadRecords() {
        this.recordService.getAll(this.currentTableLimit).subscribe(records => {
            this.records = records;
        })
    }

    start() {
        this.running=true;
        this.recordService.record.endTime=undefined;
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
        this.running=false;
        this.recordService.deleteRecord().subscribe(e => {
            this.loadRecords();
            this.emptyForm();
        })
    }

    emptyForm() {
        this.running=false;
        this.recordService.record.id=null
        this.recordService.record.startTime=null
        this.recordService.record.endTime=null
    }

    edit(record: Record) {
        this.recordService.record = record;
    }

    save() {
        this.recordService.updateRecord().subscribe(e => {
            this.emptyForm();
            this.loadRecords();
        });
    }

    stop() {
        this.running=false;
        this.recordService.record.endTime = new Date().getTime();
        if (this.updatePoll) this.updatePoll.unsubscribe();
    }

    more() {
        this.currentTableLimit *= 2;
        this.loadRecords();
    }


}