import { ButtonComponent } from '../ui/button/button.component';
import { ILabelValue } from '../../ts/models/label-value.model';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DropdownComponent } from '../ui/dropdown/dropdown.component';
import { SortButtonComponent } from '../ui/sort-button/sort-button.component';

@Component({
  selector: 'app-subheading',
  standalone: true,
  imports: [
    ButtonComponent,
    DropdownComponent,
    SortButtonComponent
  ],
  templateUrl: './subheading.component.html',
  styleUrl: './subheading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubheadingComponent {}
