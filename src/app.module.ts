import { NgModule, provide, enableProdMode}      from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { HttpModule }      from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }  from './app.component';
import { RecordService, FirebaseService}  from './services/index';
import "./assets/css/main.css";
declare var PRODMODE: boolean;

if (PRODMODE) {
    console.log("Running Application with PROD - Flag")
    enableProdMode();
}
else {
    console.log("Running Application with DEV - Flag")
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [AppComponent],
    providers: [
        appRoutingProviders,
        provide(LocationStrategy, { useClass: HashLocationStrategy }),
        provide("rest-url", { useValue: 'https://timetable-b10ed.firebaseio.com/' }),
        FirebaseService,
        RecordService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }