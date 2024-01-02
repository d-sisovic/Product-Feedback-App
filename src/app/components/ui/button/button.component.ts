import { NgClass } from '@angular/common';
import { ButtonColor } from './ts/enums/button-color.enum';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input() disabled!: boolean;
  @Input({ required: true }) label!: string;
  @Input() color: ButtonColor = ButtonColor.PURPLE;

  public get getButtonColor(): typeof ButtonColor {
    return ButtonColor;
  }
}
