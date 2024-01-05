import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapSummaryComponent } from './roadmap-summary.component';

describe('RoadmapSummaryComponent', () => {
  let component: RoadmapSummaryComponent;
  let fixture: ComponentFixture<RoadmapSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadmapSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoadmapSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
