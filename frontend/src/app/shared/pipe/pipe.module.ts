import { NgModule } from '@angular/core';
import { ConvertCurrencyPipe } from './convert-currency.pipe';
import { NamePipe } from './name.pipe';

@NgModule({
  declarations: [ConvertCurrencyPipe, NamePipe],
  exports: [ConvertCurrencyPipe, NamePipe],
})
export class PipeModule {}
