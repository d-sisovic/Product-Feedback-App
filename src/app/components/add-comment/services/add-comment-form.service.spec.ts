import { TestBed } from '@angular/core/testing';
import { AddCommentFormService } from './add-comment-form.service';

describe('AddCommentFormService', () => {
  let service: AddCommentFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCommentFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
