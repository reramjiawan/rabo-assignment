import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name',
})
export class NamePipe implements PipeTransform {
  transform(value: string | undefined) {
    return value ? value : 'Unknown';
  }
}
