import { BadgeStatusComponent } from './badge-status.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('BadgeStatusComponent', () => {
  let component: BadgeStatusComponent;
  let fixture: ComponentFixture<BadgeStatusComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BadgeStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
