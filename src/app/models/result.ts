import { Time } from '@angular/common';
import { Constructor } from './constructor';
import { Driver } from './driver';
import { FastestLap } from './fastest-lap';

export interface Result {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  Time: Time;
  FastestLap: FastestLap;
}
