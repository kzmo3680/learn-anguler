import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name :"test",
    standalone: true
})

export class Testpipe implements PipeTransform{


    transform(value: string) {
        return `${value} from test pipe`
    }
    
}