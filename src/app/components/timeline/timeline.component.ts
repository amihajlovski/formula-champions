import { Component, Input, OnInit } from '@angular/core';
import { Standing } from 'src/app/models/standing';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  @Input()
  championships: Standing[];

  constructor() {}

  ngOnInit(): void {}
}
