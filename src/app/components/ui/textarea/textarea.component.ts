import { createTrimWhitespaceValidator } from '../../../utils/util';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true })
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent implements OnInit {

  @Input({ required: true }) maxLength!: number;
  @Input({ required: true }) controlName: string = '';

  private readonly formBuilder = inject(FormBuilder);
  private readonly parentContainer = inject(ControlContainer);

  public formControl!: FormControl;

  public ngOnInit(): void {
    const validators = [createTrimWhitespaceValidator(), Validators.maxLength(this.maxLength)];

    this.parentFormGroup.addControl(this.controlName, this.formBuilder.control('', validators));
    this.formControl = this.parentFormGroup.controls[this.controlName] as FormControl;
  }

  private get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }
}
