import {Injectable} from '@angular/core'

@Injectable()
export class HelloService{
    getHello():string{
        return "Hello";
    }
}