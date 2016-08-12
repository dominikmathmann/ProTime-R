import {Component} from '@angular/core'
import {HelloService} from './service/hello.service'

declare var require:any

@Component({
    template: require('./home.component.html'),
    styles: [require('./home.component.css')],
    providers: [HelloService]
})
export class HomeComponent {
    title:string;
    
    constructor(service: HelloService){
        this.title = service.getHello();
    }
}