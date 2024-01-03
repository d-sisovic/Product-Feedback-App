import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddCommentFormService {

  private readonly formBuilder = inject(FormBuilder);

  constructor() { }

  public buildAddCommentForm(): FormGroup {
    return this.formBuilder.group({});
  }
}
