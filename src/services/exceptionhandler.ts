import {ExceptionHandler, Injectable, Injector} from '@angular/core'
import {ExceptionService} from './index'

@Injectable()
export class CustomExceptionHandler extends ExceptionHandler {
    
    constructor(private injector:Injector){
        super(null, null);
        
    }
    
    call(error: any, stackTrace: any = null, reason: any = null) {
        this.injector.get(ExceptionService).error="Unexpected Error: " + error;
        console.log(error, stackTrace, reason);
        super.call(error, stackTrace, reason);
    }
}