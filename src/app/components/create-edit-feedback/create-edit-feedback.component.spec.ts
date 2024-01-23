import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateEditFeedbackComponent } from './create-edit-feedback.component';

describe('CreateEditFeedbackComponent', () => {
  let component: CreateEditFeedbackComponent;
  let fixture: ComponentFixture<CreateEditFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CreateEditFeedbackComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
