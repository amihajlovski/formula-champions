import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  showLoader$: Observable<boolean>;

  private destroy$ = new ReplaySubject<boolean>(1);

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.showLoader$ = this.loadingService.loading$.pipe(
      takeUntil(this.destroy$)
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
