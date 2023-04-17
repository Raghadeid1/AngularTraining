import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?:number): any {

    ///if there isn't a value then return null
    if(!value) return null;
    //make limit of characters customizable
    // if limit has a value then the actuallimit = limit else actuallimit = 10
    const actuallimit = (limit) ? limit : 10;


    ///if there is a value  then return a substring  of the value from 0 to 10, and add dots at the end
    return value.substring(0,actuallimit) + '....';
  }

}
