import { RoadmapSummaryComponent } from './roadmap-summary.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('RoadmapSummaryComponent', () => {
  let component: RoadmapSummaryComponent;
  let fixture: ComponentFixture<RoadmapSummaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RoadmapSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadmapSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
