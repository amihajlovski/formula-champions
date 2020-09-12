import { Component, Input, OnInit } from '@angular/core';
import { RaceTable } from 'src/app/models/race-table';

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.scss'],
})
export class SeasonListComponent implements OnInit {
  @Input()
  season: string;

  @Input()
  races: RaceTable[];

  columns = [];

  constructor() {}

  ngOnInit(): void {}
}
