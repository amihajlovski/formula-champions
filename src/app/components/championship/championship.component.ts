import { Component, Input, OnInit } from '@angular/core';
import { Standing } from 'src/app/models/standing';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.scss'],
})
export class ChampionshipComponent implements OnInit {
  @Input() championship: Standing;

  constructor() {}

  ngOnInit(): void {}
}
