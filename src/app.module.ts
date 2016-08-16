import { NgModule, provide}      from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { HttpModule }      from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }  from './app.component';
import "./assets/css/main.css";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [AppComponent],
    providers: [appRoutingProviders, provide(LocationStrategy, { useClass: HashLocationStrategy })],
    bootstrap: [AppComponent],
})
export class AppModule { }