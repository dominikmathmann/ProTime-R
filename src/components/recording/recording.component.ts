import {Component} from '@angular/core'
import {FirebaseService, RecordService} from '../../services/index'

declare var require:any

@Component({
    template: require('./recording.component.html'),
    styles: [require('./recording.component.css')],
    providers: []
})
export class RecordingComponent {
    
    
    constructor(public firebaseService: FirebaseService, private recordService: RecordService){
        this.firebaseService.login("dominik.mathmann@gedoplan.de", "abc123").subscribe(data => {
            console.log(data);
        })
    }
    
    ngOnInit(){
        
    }
    
    start(project:number, desc:string){
        this.recordService.startRecording(project, desc).subscribe(resp => {
            console.log(resp);
        })
    }
}