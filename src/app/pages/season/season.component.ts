import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { RaceTable } from 'src/app/models/race-table';
import { RacingApiService } from 'src/app/services/racing-api/racing-api.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss'],
})
export class SeasonComponent implements OnInit, OnDestroy {
  raceTable$: Observable<RaceTable>;

  private destroy$ = new ReplaySubject<boolean>(1);

  constructor(
    private racingApiService: RacingApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.raceTable$ = this.route.params.pipe(
      switchMap((params) =>
        this.racingApiService.getResultsForYear(params.year)
      ),
      takeUntil(this.destroy$)
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
