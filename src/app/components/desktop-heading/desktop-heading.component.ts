import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryFilterComponent } from '../category-filter/category-filter.component';
import { RoadmapSummaryComponent } from '../roadmap-summary/roadmap-summary.component';
import { DesktopHeadingCardComponent } from './components/desktop-heading-card/desktop-heading-card.component';

@Component({
  selector: 'app-desktop-heading',
  standalone: true,
  imports: [
    RoadmapSummaryComponent,
    CategoryFilterComponent,
    DesktopHeadingCardComponent
  ],
  templateUrl: './desktop-heading.component.html',
  styleUrl: './desktop-heading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesktopHeadingComponent {

}
