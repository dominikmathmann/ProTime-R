import {Component, Input, ElementRef, forwardRef} from '@angular/core'
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl} from '@angular/forms'
import * as moment from 'moment'

@Component({
    selector: "r-dateinput",
    template: `<input type='text' [(ngModel)]='datevalue' (change)='change()' (blur)='touch()' [class]="styleClass">`,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: DateInputComponent,
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => DateInputComponent),
            multi: true
        }
    ]
})
export class DateInputComponent implements ControlValueAccessor {

    @Input('date-format')
    dateFormat = "DD.MM.YYYY HH:mm"

    datevalue: string;

    _changeFunction: (_: any) => void;

    _touchFunction: () => void;

    styleClass: string;


    constructor(public element: ElementRef) {
    }

    ngAfterViewInit() {
        this.styleClass = this.element.nativeElement.className;
        this.element.nativeElement.className = "";
    }

    validate(c: FormControl): { [key: string]: any } {
        
        return moment(this.datevalue, this.dateFormat, true).isValid() ? {} : { "dateFormat": "Ungültiges Format, Format: " + this.dateFormat }
    }

    touch() {
        this._touchFunction();
        this.styleClass = this.element.nativeElement.className;
    }

    change() {
        this._changeFunction(
            moment(this.datevalue, this.dateFormat)
        );
    }

    writeValue(obj: Date) {
        this.datevalue = obj ? moment(obj).format(this.dateFormat) : '';
    }

    registerOnChange(fn: any) {
        this._changeFunction = fn;
    }

    registerOnTouched(fn: any) {
        this._touchFunction = fn;
    }
}