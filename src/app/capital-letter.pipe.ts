import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CapitalLetter'
})
export class CapitalLetterPipe implements PipeTransform {

  transform(value: any, args: any[]): any {
    var result = '';
    if (value.length > 0) {
      //var words = value.split(" ");
      //words.array.forEach((word) => {
      result += value.charAt(0).toUpperCase() + value.slice(1) + " ";
      //});
    }
    return result;
  }

}
