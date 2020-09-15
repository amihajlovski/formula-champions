import { Location } from '@angular/common';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/app.material';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { SeasonComponent } from 'src/app/pages/season/season.component';
import { results } from 'src/app/_mocks_/results';
import { SeasonListComponent } from './season-list.component';

describe('SeasonListComponent', () => {
  let component: SeasonListComponent;
  let fixture: ComponentFixture<SeasonListComponent>;
  let location: Location;

  const raceTable = results.MRData.RaceTable;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          MaterialModule,
          RouterTestingModule.withRoutes([
            { path: '', component: HomeComponent },
            { path: 'season/:year', component: SeasonComponent },
          ]),
        ],
        declarations: [SeasonListComponent],
      }).compileComponents();
      location = TestBed.inject(Location);
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
    fixture.debugElement.query(By.css('button')).nativeElement.click();
    tick();
    expect(location.path()).toEqual('/');
  }));
});
