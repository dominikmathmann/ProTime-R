import {Injectable} from '@angular/core'
import {Record, RecordSummary} from '../models/index'
import * as moment from 'moment'

@Injectable()
export class ReportService {

    summarizeByDay(records: Record[]): Map<string, Map<string, RecordSummary>> {
        var summary = new Map<string, Map<string, RecordSummary>>();

        records.forEach(r => {
            var dayString = moment(r.startTime).format("DD.MM.YYYY")
            var projectString = r.project;
            
            if (!summary.has(dayString)) summary.set(dayString,new Map<string, RecordSummary>());
            if (!summary.get(dayString).get(projectString)) summary.get(dayString).set(projectString, new RecordSummary());
            
            summary.get(dayString).get(projectString).add(r);
        })

        return summary;
    }
}
