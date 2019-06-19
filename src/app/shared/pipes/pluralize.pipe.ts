import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform{
  transform(value: any, singular: string, plural: string) {
    return String(value) + ' ' + (+value > 1 ? plural : singular);
  }
}
