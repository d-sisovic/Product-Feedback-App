import { RoadmapCardComponent } from './roadmap-card.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('RoadmapCardComponent', () => {
  let component: RoadmapCardComponent;
  let fixture: ComponentFixture<RoadmapCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadmapCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadmapCardComponent);
    component = fixture.componentInstance;
    component.card = {
      id: 1,
      title: "Test card",
      category: "enhancement",
      upvotes: 112,
      status: "suggestion",
      description: ""
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
