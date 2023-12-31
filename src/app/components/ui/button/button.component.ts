import { ButtonColor } from './ts/enums/button-color.enum';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input({ required: true }) label!: string;
  @Input() color: ButtonColor = ButtonColor.PURPLE;

}
