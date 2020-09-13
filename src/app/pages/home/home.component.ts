import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Standing } from 'src/app/models/standing';
import { RacingApiService } from 'src/app/services/racing-api/racing-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  championships$: Observable<Standing[]>;

  private destroy$ = new ReplaySubject<boolean>(1);

  constructor(private racingApiService: RacingApiService) {}

  ngOnInit(): void {
    this.championships$ = this.racingApiService.getDriverStandings(55, 11).pipe(
      map((championships) => championships.reverse()),
      takeUntil(this.destroy$)
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
