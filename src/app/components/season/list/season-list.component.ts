import { Component, Input, OnInit } from '@angular/core';
import { Race } from 'src/app/models/race';

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.scss'],
})
export class SeasonListComponent implements OnInit {
  @Input()
  season: string;

  @Input()
  races: Race[];

  columns = [];

  constructor() {}

  ngOnInit(): void {}
}
