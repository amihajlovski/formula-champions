import { Pipe, PipeTransform } from '@angular/core';
import { Driver } from '../models/driver';

@Pipe({
  name: 'driverName',
})
export class DriverNamePipe implements PipeTransform {
  transform(value: Driver, ...args: unknown[]): unknown {
    if (!value) {
      return null;
    }
    return `${value.givenName} ${value.familyName}`;
  }
}
