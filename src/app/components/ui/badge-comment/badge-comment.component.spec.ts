import { BadgeCommentComponent } from './badge-comment.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('BadgeCommentComponent', () => {
  let component: BadgeCommentComponent;
  let fixture: ComponentFixture<BadgeCommentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BadgeCommentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
