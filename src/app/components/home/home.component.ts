import { HeadingComponent } from '../heading/heading.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardListComponent } from '../card-list/card-list.component';
import { SubheadingComponent } from '../subheading/subheading.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeadingComponent,
    CardListComponent,
    SubheadingComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
