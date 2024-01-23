import { DesktopHeadingCardComponent } from './desktop-heading-card.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('DesktopHeadingCardComponent', () => {
  let component: DesktopHeadingCardComponent;
  let fixture: ComponentFixture<DesktopHeadingCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DesktopHeadingCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopHeadingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
