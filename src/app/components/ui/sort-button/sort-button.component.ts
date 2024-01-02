import { Sort } from '../../../ts/enums/sort.enum';
import { StoreService } from '../../../services/store.service';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ILabelValue } from '../../../ts/models/label-value.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-sort-button',
  standalone: true,
  imports: [DropdownComponent],
  templateUrl: './sort-button.component.html',
  styleUrl: './sort-button.component.scss',
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
export class SortButtonComponent implements OnInit {

  private readonly storeService = inject(StoreService);

  public showDropdown!: boolean;
  public selectedItem!: ILabelValue;

  public readonly dropdownValues: ILabelValue[] = [
    { label: 'Most Upvotes', value: Sort.MOST_UPVOTES },
    { label: 'Least Upvotes', value: Sort.LEAST_UPVOTES },
    { label: 'Most Comments', value: Sort.MOST_COMMENTS },
    { label: 'Least Comments', value: Sort.LEAST_COMMENTS }
  ];

  public ngOnInit(): void {
    this.setInitiallySelectedItem();
  }

  public onSetSortMethod(selectedItem: ILabelValue): void {
    this.closeDropdown();
    this.selectedItem = selectedItem;

    this.storeService.setFilterStoreValue(this.selectedItem.value, 'sort')
  }

  public onToggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  public onCloseDropdown(): void {
    this.closeDropdown();
  }

  private setInitiallySelectedItem(): void {
    const { sort } = this.storeService.getFilterStore();

    this.selectedItem = this.dropdownValues.find(item => item.value === sort) as ILabelValue;
  }

  private closeDropdown(): void {
    this.showDropdown = false;
  }
}
