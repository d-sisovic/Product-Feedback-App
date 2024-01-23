import { RouterTestingModule } from '@angular/router/testing';
import { CreateEditFeedbackComponent } from './create-edit-feedback.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('CreateEditFeedbackComponent', () => {
  let component: CreateEditFeedbackComponent;
  let fixture: ComponentFixture<CreateEditFeedbackComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CreateEditFeedbackComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
