import { TestBed } from '@angular/core/testing';
import { CreateEditFeedbackService } from './create-edit-feedback.service';

describe('CreateEditFeedbackService', () => {
  let service: CreateEditFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateEditFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
