import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(value: number, code: string): number {
    if (isNaN(value)) {
      return null;
    }
    return this.changeValue(value, code);
  }

  changeValue(cost, code) {
    switch (code) {
      case 'USD': cost /= 68;
        break;
      case 'EUR': cost /= 87;
        break;
      case 'GBP': cost /= 78;
        break;
      case 'CAD': cost /= 51;
        break;
    }
    return cost;
  }
}
