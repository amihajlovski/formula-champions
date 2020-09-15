import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { RacingApiService } from 'src/app/services/racing-api/racing-api.service';
import { SeasonComponent } from './season.component';

describe('SeasonComponent', () => {
  let component: SeasonComponent;
  let fixture: ComponentFixture<SeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [SeasonComponent],
      providers: [RacingApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render season list', () => {
    const seasonList = fixture.debugElement.query(By.css('app-season-list'));
    expect(seasonList).toBeDefined();
  });
});
