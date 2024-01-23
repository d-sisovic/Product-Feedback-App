import { CardComponent } from './card.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
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
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
