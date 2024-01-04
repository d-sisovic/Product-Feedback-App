import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CreateEditFeedbackService {

  private readonly formBuilder = inject(FormBuilder);

  constructor() { }

  public buildForm(): FormGroup {
    return this.formBuilder.group({
      status: ['', []],
      category: ['', []]
    });
  }
}
