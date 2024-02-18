import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reduceText',
    standalone: true
})
export class ReduceTextPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    return value.substring(0, args[0]);
  }

}
