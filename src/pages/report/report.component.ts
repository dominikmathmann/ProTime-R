import {Component} from '@angular/core'
import {RecordService, ReportService} from '../../services/index'
import {NavButtonPanelComponent, DateInputComponent} from '../../components/index'
import {Record, RecordSummary} from '../../models/index'
import {Observable, Subscription} from 'rxjs'
import * as moment from 'moment/moment'

declare var require: any

@Component({
    template: require('./report.component.html'),
    styles: [require('./report.component.css')],
    providers: [ReportService],
    directives: [NavButtonPanelComponent, DateInputComponent]
})
export class ReportComponent {

    constructor(private recordService: RecordService, private reportService: ReportService) {
        let fromDate = moment().date(1).hour(0).minute(0).second(0);
        let toDate = moment().date(1).hour(0).minute(0).second(0).add(1, 'months');

        this.filter.from = fromDate.toDate().getTime();
        this.filter.to = toDate.toDate().getTime();
        this.doFilter();
    }

    filter = new Filter();

    records: Record[];

    summary: Map<string, Map<string, RecordSummary>>

    doFilter() {
        this.recordService.query(this.filter.project, this.filter.from, this.filter.to).subscribe(records => {
            this.records = records
            this.summary = this.reportService.summarizeByDay(this.records);
        });
    }

    getDaySum(day: string) {
        let sumDay = Array.from(this.summary.get(day).values()).reduce((prev, current) => { return prev + current.sum }, 0);
        return sumDay;
    }

    getOverallSum() {
        let overallSum = Array.from(this.summary.keys()).reduce((prev, current) => { return prev + this.getDaySum(current) }, 0);
        return overallSum;
    }

    addMonth(amount: number) {
        this.filter.from = moment(this.filter.from).add(amount, 'months').toDate().getTime();
        this.filter.to = moment(this.filter.to).add(amount, 'months').toDate().getTime();
    }

}


class Filter {
    project: string
    from: number
    to: number
}