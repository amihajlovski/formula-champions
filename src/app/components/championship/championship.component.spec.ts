import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/app.material';
import { Standing } from 'src/app/models/standing';
import { DriverNamePipe } from 'src/app/pipes/driver-name.pipe';
import { champion } from 'src/app/_mocks_/champion';
import { driverStandings } from 'src/app/_mocks_/driverStandings';
import { ChampionshipComponent } from './championship.component';

describe('ChampionshipComponent', () => {
  let component: ChampionshipComponent;
  let fixture: ComponentFixture<ChampionshipComponent>;

  const championship = driverStandings.MRData.StandingsTable.StandingsLists[0];

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MaterialModule, RouterTestingModule],
        declarations: [ChampionshipComponent, DriverNamePipe],
        providers: [DriverNamePipe],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipComponent);
    component = fixture.componentInstance;
    component.championship = championship as Standing;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the champion', () => {
    const championshipDebugEl = fixture.debugElement.query(
      By.css('.championship')
    );
    const championshipElement = championshipDebugEl.nativeElement;
    const winner = championshipElement
      .querySelectorAll('.championship__season')[0]
      .querySelector('[data-testid="champion"]').textContent;
    expect(winner).toEqual(`${champion.givenName} ${champion.familyName}`);
  });
});
