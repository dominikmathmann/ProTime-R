import {Component} from '@angular/core'
import {FirebaseService} from '../../services/index'

declare var require:any

@Component({
    template: require('./recording.component.html'),
    styles: [require('./recording.component.css')],
    providers: [FirebaseService]
})
export class RecordingComponent {
    
    
    constructor(public service: FirebaseService){
        this.service.login("dominik.mathmann@gedoplan.de", "abc123").subscribe(data => {
            console.log(data);
        })
    }
    
    ngOnInit(){
        
    }
}