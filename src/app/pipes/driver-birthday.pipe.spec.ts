import { DatePipe } from '@angular/common';
import { DriverBirthdayPipe } from './driver-birthday.pipe';

describe('DriverBirthdayPipe', () => {
  it('create an instance', () => {
    const datePipe = new DatePipe('en-EN');
    const pipe = new DriverBirthdayPipe(datePipe);
    expect(pipe).toBeTruthy();
  });
});
