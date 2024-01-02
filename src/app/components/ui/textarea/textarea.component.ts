import { FormControl, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent {

  public textareaFormControl: FormControl = new FormControl('', [Validators.maxLength(250)]);

  public onSetValue(event: Event): void {
    this.textareaFormControl.setValue((event.target as HTMLInputElement).value);
  }
}
