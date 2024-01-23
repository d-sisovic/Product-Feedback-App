import { CommentCardComponent } from './comment-card.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('CommentCardComponent', () => {
  let component: CommentCardComponent;
  let fixture: ComponentFixture<CommentCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommentCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentCardComponent);
    component = fixture.componentInstance;
    component.comment = {
      id: 1,
      content: "",
      user: {
        image: "",
        name: "Daniel",
        username: "siskoftn"
      }
    };

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
