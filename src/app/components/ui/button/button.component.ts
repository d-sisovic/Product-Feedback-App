import { NgClass } from '@angular/common';
import { ButtonColor } from './ts/enums/button-color.enum';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Output() buttonClickEvent = new EventEmitter();

  @Input() disabled!: boolean;
  @Input({ required: true }) label!: string;
  @Input() color: ButtonColor = ButtonColor.PURPLE;

  public onClick(): void {
    if (this.disabled) { return; }

    this.buttonClickEvent.emit();
  }

  public get getButtonColor(): typeof ButtonColor {
    return ButtonColor;
  }
}
