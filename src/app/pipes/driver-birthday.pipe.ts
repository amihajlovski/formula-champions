import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Driver } from '../models/driver';

@Pipe({
  name: 'driverBirthday',
})
export class DriverBirthdayPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}
  transform(value: Driver, ...args: unknown[]): unknown {
    if (!value) {
      return null;
    }
    return `${value.nationality}, born in ${this.datePipe.transform(
      value.dateOfBirth,
      'MMM yyyy'
    )}.`;
  }
}
