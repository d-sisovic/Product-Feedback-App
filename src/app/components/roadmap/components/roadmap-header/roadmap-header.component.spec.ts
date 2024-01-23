import { RoadmapHeaderComponent } from './roadmap-header.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('RoadmapHeaderComponent', () => {
  let component: RoadmapHeaderComponent;
  let fixture: ComponentFixture<RoadmapHeaderComponent>;

  beforeEach(waitForAsync(() => {
   TestBed.configureTestingModule({
      imports: [RoadmapHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadmapHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
