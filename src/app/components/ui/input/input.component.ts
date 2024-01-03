import { NgClass } from '@angular/common';
import { createTrimWhitespaceValidator } from '../../../utils/util';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { FormBuilder, ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    NgClass,
    ReactiveFormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true })
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {

  @Input() textareaMode!: boolean;
  @Input() isInputRequired = true;
  @Input() shortTextarea!: boolean;
  @Input() placeholder: string = '';
  @Input({ required: true }) controlName: string = '';

  private readonly formBuilder = inject(FormBuilder);
  private readonly parentContainer = inject(ControlContainer);

  public formControl!: FormControl;

  public ngOnInit(): void {
    const validators = this.isInputRequired ? [createTrimWhitespaceValidator()] : [];

    this.parentFormGroup.addControl(this.controlName, this.formBuilder.control('', validators));
    this.formControl = this.parentFormGroup.controls[this.controlName] as FormControl;
  }

  public ngOnDestroy(): void {
    this.parentFormGroup.removeControl(this.controlName);
  }

  private get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }
}
