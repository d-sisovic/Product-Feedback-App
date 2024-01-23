import { DesktopHeadingComponent } from './desktop-heading.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('DesktopHeadingComponent', () => {
  let component: DesktopHeadingComponent;
  let fixture: ComponentFixture<DesktopHeadingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DesktopHeadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
