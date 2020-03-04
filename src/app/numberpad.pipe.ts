import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberpad'
})
export class NumberpadPipe implements PipeTransform {

  transform(input: number, places: any): string {
    let out = '';
    if (places) {
      const placesLength = parseInt(places, 10);
      const inputLength = input.toString().length;
      for (let i = 0; i < (placesLength - inputLength); i++) {
        out = '0' + out;
      }
      out = out + input;
    }
    return out;
  }

}
