import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { driverStandings } from 'src/app/_mocks_/driverStandings';
import { TimelineComponent } from './timeline.component';

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;
  let timelineElement: DebugElement;
  let timelineContentElement: Element;

  const standings = driverStandings.MRData.StandingsTable.StandingsLists;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [TimelineComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
    component.championships = standings;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a list of races', () => {
    timelineElement = fixture.debugElement.query(By.css('section'));
    timelineContentElement = timelineElement.nativeElement;
    expect(
      timelineContentElement.querySelectorAll('.timeline-content').length
    ).toEqual(standings.length);
  });
});
