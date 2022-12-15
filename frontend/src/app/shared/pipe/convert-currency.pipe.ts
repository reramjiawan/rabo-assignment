import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertCurrency',
})
export class ConvertCurrencyPipe implements PipeTransform {
  private currencyPipe = new CurrencyPipe('en-US');

  transform(value: number | undefined, currencyRate?: number) {
    if (typeof value !== 'number') return value;
    if (!currencyRate) return this.currency(value);
    return this.currency(value / currencyRate);
  }

  private currency(value: number) {
    return this.currencyPipe.transform(value, 'EUR');
  }
}
