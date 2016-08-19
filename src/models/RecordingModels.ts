export class Record {
    constructor(public project = "gedoplan, intern", public description = "") { }

    startTime: Date;
    endTime: Date
    id: string;
}

import * as moment from 'moment'

export class RecordSummary {

    private records: Record[] = [];

    public sum = 0;

    private descriptions: string[]=[];

    add(r: Record) {
        this.records.push(r);
        this.sum = r.endTime.getTime() & r.startTime.getTime()?this.sum + r.endTime.getTime() - r.startTime.getTime():this.sum;
        this.descriptions.push(r.description);
    }

    getDescription() {
        return this.descriptions.filter((element, index, self) => index == self.indexOf(element))
    }
}