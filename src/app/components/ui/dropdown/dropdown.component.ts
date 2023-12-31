import { ILabelValue } from '../../../ts/models/label-value.model';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {

  @Output() selectItemEvent = new EventEmitter();

  @Input() selectedValue!: string;
  @Input({ required: true }) dropdownValues: ILabelValue[] = [];

  public onSelectItem(item: ILabelValue): void {
    this.selectItemEvent.emit(item);
  }
}
