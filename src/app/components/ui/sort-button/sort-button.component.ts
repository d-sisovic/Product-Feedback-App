import { DropdownComponent } from '../dropdown/dropdown.component';
import { ILabelValue } from '../../../ts/models/label-value.model';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

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

  public showDropdown!: boolean;
  public selectedItem!: ILabelValue;

  public dropdownValues: ILabelValue[] = [
    { label: 'Most Upvotes', value: 'Most Upvotes' },
    { label: 'Least Upvotes', value: 'Least Upvotes' },
    { label: 'Most Comments', value: 'Most Comments' },
    { label: 'Least Comments', value: 'Least Comments' }
  ];

  public ngOnInit(): void {
    const [selectedItem] = this.dropdownValues;

    this.selectedItem = { ...selectedItem };
  }

  public onSetSelectedItem(selectedItem: ILabelValue): void {
    this.showDropdown = false;
    this.selectedItem = selectedItem;
  }

  public onToggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }
}
