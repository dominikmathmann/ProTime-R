import {Component} from '@angular/core'
import {RecordService} from '../../services/index'
import {NavButtonPanelComponent} from '../../shared/index'

declare var require:any

@Component({
    template: require('./recording.component.html'),
    styles: [require('./recording.component.css')],
    providers: [],
    directives: [NavButtonPanelComponent]
})
export class RecordingComponent {
    
    
    constructor(private recordService: RecordService){
    }
    
    ngOnInit(){
        
    }
    
    start(project:number, desc:string){
        this.recordService.startRecording(project, desc).subscribe(resp => {
            console.log(resp);
        })
    }
}