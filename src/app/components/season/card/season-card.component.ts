import { Component, Input, OnInit } from '@angular/core';
import { DriverStanding } from 'src/app/models/driver-standing';
import { Race } from 'src/app/models/race';

@Component({
  selector: 'app-season-card',
  templateUrl: './season-card.component.html',
  styleUrls: ['./season-card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  race: Race;

  @Input()
  champion: DriverStanding;

  constructor() {}

  ngOnInit(): void {}
}
