import { NgClass, TitleCasePipe } from '@angular/common';
import { StoreService } from '../../../services/store.service';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ILabelValue } from '../../../ts/models/label-value.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, inject, signal } from '@angular/core';

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
export class SelectComponent implements OnInit, OnChanges {

  @Output() setSelectedValue = new EventEmitter();

  @Input() preselectedValue!: string | null;

  private readonly storeService = inject(StoreService);

  public showDropdown!: boolean;
  public dropdownValues: ILabelValue[] = [];

  public selectedDropdownItem = signal<ILabelValue | null>(null);

  public ngOnInit(): void {
    this.dropdownValues = this.storeService.getAllAvailableCategories(false)();
    this.setInitialSelectedValue();
  }

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

  private setInitialSelectedValue(): void {
    const [firstDropdownItem] = this.dropdownValues;
    this.setDropdownItem(firstDropdownItem);
  }

  private setDropdownItemOnChanges(): void {
    const matchingItem = this.dropdownValues.find(item => item.value === this.preselectedValue);

    if (!matchingItem) { return; }

    this.setDropdownItem(matchingItem);
  }

  private setDropdownItem(item: ILabelValue): void {
    this.selectedDropdownItem.set(item);
    this.setSelectedValue.emit(item.value);
  }
}
