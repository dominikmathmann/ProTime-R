import {ExceptionHandler, Injectable, Injector} from '@angular/core'
import {AppComponent} from '../app.component';

@Injectable()
export class CustomExceptionHandler extends ExceptionHandler {
    
    constructor(private injector:Injector){
        super(null, null);
        
    }
    
    call(error: any, stackTrace: any = null, reason: any = null) {
        this.injector.get(AppComponent).error="Unexpected Error: " + error;
        super.call(error, stackTrace, reason);
    }
}