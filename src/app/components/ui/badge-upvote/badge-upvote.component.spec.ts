import { BadgeUpvoteComponent } from './badge-upvote.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('BadgeUpvoteComponent', () => {
  let component: BadgeUpvoteComponent;
  let fixture: ComponentFixture<BadgeUpvoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeUpvoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeUpvoteComponent);
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
