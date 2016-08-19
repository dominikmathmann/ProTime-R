export class Record {
    constructor(public project = "gedoplan, intern", public description = "") { }

    startTime: number;
    endTime: number
    id: string;
}

import * as moment from 'moment'

export class RecordSummary {

    private records: Record[] = [];

    public sum = 0;

    private descriptions: string[]=[];

    add(r: Record) {
        this.records.push(r);
        this.sum = r.endTime && r.startTime ?this.sum + r.endTime - r.startTime:this.sum;
        this.descriptions.push(r.description);
    }

    getDescription() {
        return this.descriptions.filter((element, index, self) => index == self.indexOf(element))
    }
}