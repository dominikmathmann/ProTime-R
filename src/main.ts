import {LocationStrategy, Location, HashLocationStrategy } from '@angular/common';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { BrowserModule}  from '@angular/platform-browser';
import { enableProdMode, provide, NgModule, ANALYZE_FOR_ENTRY_COMPONENTS} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
declare var require: any

// main css
require('./assets/css/main.css')

@NgModule({
    imports: [BrowserModule],
    providers: [APP_ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
class MyAppModule { }


platformBrowserDynamic().bootstrapModule(MyAppModule);