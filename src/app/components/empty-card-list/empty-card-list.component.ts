import { ButtonComponent } from '../ui/button/button.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-empty-card-list',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './empty-card-list.component.html',
  styleUrl: './empty-card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyCardListComponent { }
