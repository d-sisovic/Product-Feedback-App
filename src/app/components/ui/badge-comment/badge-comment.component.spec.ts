import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeCommentComponent } from './badge-comment.component';

describe('BadgeCommentComponent', () => {
  let component: BadgeCommentComponent;
  let fixture: ComponentFixture<BadgeCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeCommentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BadgeCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
