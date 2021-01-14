import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExppnentialPipe implements PipeTransform {

  transform(value: number): any {
    return Math.pow ( value, 2);
  }

}
