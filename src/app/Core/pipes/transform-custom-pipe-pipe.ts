import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformCustomPipe',
  pure : false
})


export class TransformCustomPipePipe implements PipeTransform {
  transform(value: string, start :number , end : number): string {
    return value.slice(start , end);
  }
}
