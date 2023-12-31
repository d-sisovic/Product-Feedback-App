import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeUpvoteComponent } from './badge-upvote.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
