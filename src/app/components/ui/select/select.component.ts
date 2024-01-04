import { NgClass, TitleCasePipe } from '@angular/common';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ILabelValue } from '../../../ts/models/label-value.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, signal } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    NgClass,
    TitleCasePipe,
    DropdownComponent
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('rotateChevron', [
      state('open', style({
        transform: 'rotate(180deg)'
      })),
      state('closed', style({
        transform: 'rotate(0deg)'
      })),
      transition('open <=> closed', animate('0.5s ease'))
    ])
  ]
})
export class SelectComponent implements OnChanges {

  @Output() setSelectedValue = new EventEmitter();

  @Input() preselectedValue!: string | null;
  @Input() dropdownValues: ILabelValue[] = [];

  public showDropdown!: boolean;
  public selectedDropdownItem = signal<ILabelValue | null>(null);

  public ngOnChanges(): void {
    this.setDropdownItemOnChanges();
  }

  public onToggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  public onSetValue(item: ILabelValue): void {
    this.setDropdownItem(item);
    this.onToggleDropdown();
  }

  private setDropdownItemOnChanges(): void {
    this.setDropdownItem(this.getMatchingDropdownItem);
  }

  private setDropdownItem(item: ILabelValue): void {
    if (!item) { return; }

    this.selectedDropdownItem.set(item);
    this.setSelectedValue.emit(item.value);
  }

  private get getMatchingDropdownItem(): ILabelValue {
    const matchingItem = this.dropdownValues.find(item => item.value === this.preselectedValue);

    if (matchingItem) { return matchingItem; }

    const [firstDropdownItem] = this.dropdownValues;

    return firstDropdownItem;
  }
}
