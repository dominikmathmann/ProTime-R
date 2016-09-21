import { NgModule, provide, enableProdMode, ExceptionHandler}      from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { HttpModule }      from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }  from './app.component';
import { ErrorPipe, MapValuesPipe, MapKeyPipe, TimeToHoursPipe}  from './components/index';
import { RecordService, FirebaseService, CustomExceptionHandler, ExceptionService}  from './services/index';
import "./assets/css/main.css";

const MODE = process.env.runtime;


if (MODE == "development") {
    console.log("Running Application with DEV - Flag")
}
else {
    console.log("Running Application with PROD - Flag")
    enableProdMode();
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [AppComponent, ErrorPipe, MapValuesPipe, MapKeyPipe, TimeToHoursPipe],
    providers: [
        ExceptionService,
        appRoutingProviders,
        provide(LocationStrategy, { useClass: HashLocationStrategy }),
        provide("rest-url", { useValue: "https://protime-r.firebaseio.com/" }),
        FirebaseService,
        RecordService,
        provide(ExceptionHandler, { useClass: CustomExceptionHandler })
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }