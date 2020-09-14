import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MaterialModule } from 'src/app/app.material';
import { Standing } from 'src/app/models/standing';
import { DriverNamePipe } from 'src/app/pipes/driver-name.pipe';
import { driverStandings } from 'src/app/_mocks_/driverStandings';
import { ChampionshipComponent } from './championship.component';

describe('ChampionshipComponent', () => {
  let component: ChampionshipComponent;
  let fixture: ComponentFixture<ChampionshipComponent>;

  const championship = driverStandings.MRData.StandingsTable.StandingsLists[0];

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MaterialModule],
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
});
