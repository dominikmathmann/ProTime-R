import {Pipe} from '@angular/core'

@Pipe({ name: 'errors' })
export class ErrorPipe {
    transform(v: {}, args: any[]) {
        return Object.keys(v).map(key => v[key]).join(", ");
    }
}