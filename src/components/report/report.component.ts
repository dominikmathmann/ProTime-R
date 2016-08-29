import {Component} from '@angular/core'
import {RecordService, ReportService} from '../../services/index'
import {NavButtonPanelComponent, DateInputComponent} from '../shared/index'
import {Record, RecordSummary} from '../../models/index'
import {Observable, Subscription} from 'rxjs'

declare var require: any

@Component({
    template: require('./report.component.html'),
    styles: [require('./report.component.css')],
    providers: [ReportService],
    directives: [NavButtonPanelComponent, DateInputComponent]
})
export class ReportComponent {

    constructor(private recordService: RecordService, private reportService:ReportService) {
        this.doFilter();
    }

    filter = new Filter();

    records: Record[];
    
    summary: Map<string, Map<string, RecordSummary>>

    doFilter() {       
        this.recordService.getAll(100).subscribe(records => {
            this.records = records
            this.summary=this.reportService.summarizeByDay(this.records);
        });
    }
    
    getDaySum(day:string){
        let sumDay=Array.from(this.summary.get(day).values()).reduce((prev, current) => { return prev + current.sum}, 0);
        return sumDay;
    }
    
    getOverallSum(){
        let overallSum=Array.from(this.summary.keys()).reduce((prev, current) => { return prev + this.getDaySum(current)}, 0);
        return overallSum;
    }

}


class Filter {
    project: string
    from: Date
    to: Date
}