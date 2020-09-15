import {
  ComponentFixture,
  fakeAsync,
  inject,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/app.material';
import { SeasonComponent } from 'src/app/pages/season/season.component';
import { results } from 'src/app/_mocks_/results';
import { SeasonListComponent } from './season-list.component';

describe('SeasonListComponent', () => {
  let component: SeasonListComponent;
  let fixture: ComponentFixture<SeasonListComponent>;

  const raceTable = results.MRData.RaceTable;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          MaterialModule,
          RouterTestingModule.withRoutes([
            { path: 'season/:year', component: SeasonComponent },
          ]),
        ],
        declarations: [SeasonListComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonListComponent);
    component = fixture.componentInstance;
    component.raceTable = raceTable as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should click the home button', fakeAsync(() => {
    waitForAsync(
      inject([Router, Location], (router: Router, location: Location) => {
        fixture.debugElement.query(By.css('button')).nativeElement.click();
        fixture.whenStable().then(() => {
          expect(location.pathname).toEqual('/');
        });
      })
    );
  }));
});
