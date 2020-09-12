import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Standing } from 'src/app/models/standing';
import { RacingApiServiceService } from 'src/app/services/racing-api/racing-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  championships$: Observable<Standing[]>;

  private destroy$ = new ReplaySubject<boolean>(1);

  constructor(private racingApiService: RacingApiServiceService) {}

  ngOnInit(): void {
    this.championships$ = this.racingApiService
      .getDriverStandings(55, 11)
      .pipe(takeUntil(this.destroy$));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
