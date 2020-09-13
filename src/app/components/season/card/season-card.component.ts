import { Component, Input, OnInit } from '@angular/core';
import { Race } from 'src/app/models/race';

@Component({
  selector: 'app-season-card',
  templateUrl: './season-card.component.html',
  styleUrls: ['./season-card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  race: Race;

  constructor() {}

  ngOnInit(): void {}
}
