import {Component} from '@angular/core'
import {ROUTER_DIRECTIVES, RouterConfig, Route} from '@angular/router'
import {HTTP_PROVIDERS} from '@angular/http'
declare var require:any;

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    template: '<div id="wrapper"><router-outlet></router-outlet></div>',
    providers: [HTTP_PROVIDERS]
})
export class AppComponent {
    title = "Hello Webpack";
}