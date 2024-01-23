import { BackHeaderComponent } from './back-header.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('BackHeaderComponent', () => {
  let component: BackHeaderComponent;
  let fixture: ComponentFixture<BackHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BackHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
