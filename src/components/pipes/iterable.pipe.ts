import {Pipe, PipeTransform} from '@angular/core'


@Pipe({ name: 'mapValues', pure: false })
export class MapValuesPipe implements PipeTransform {
    transform(value: any, args: any[] = null): any {

        return value ? Array.from(value.keys()).map((k: any) => {
            return { key: k, value: value.get(k) };
        }) : null;
    }
}

@Pipe({ name: 'mapKeys', pure: false })
export class MapKeyPipe implements PipeTransform {
    transform(value: any, args: any[] = null): any {
        let a:any;
        let elements=Array.from(value.keys());
        return elements;
    }
}