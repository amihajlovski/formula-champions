import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MaterialModule } from 'src/app/app.material';
import { DriverBirthdayPipe } from 'src/app/pipes/driver-birthday.pipe';
import { DriverNamePipe } from 'src/app/pipes/driver-name.pipe';
import { driverStandings } from 'src/app/_mocks_/driverStandings';
import { results } from 'src/app/_mocks_/results';
import { CardComponent } from './season-card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  const races = results.MRData.RaceTable.Races;
  const champion =
    driverStandings.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MaterialModule],
        declarations: [
          CardComponent,
          DatePipe,
          DriverBirthdayPipe,
          DriverNamePipe,
        ],
        providers: [DatePipe, DriverBirthdayPipe, DriverNamePipe],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;

    component.race = races[0] as any;
    component.champion = champion;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
