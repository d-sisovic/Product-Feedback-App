import { RouterTestingModule } from '@angular/router/testing';
import { EditFeedbackComponent } from './edit-feedback.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('EditFeedbackComponent', () => {
  let component: EditFeedbackComponent;
  let fixture: ComponentFixture<EditFeedbackComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        EditFeedbackComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
