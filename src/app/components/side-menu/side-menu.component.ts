import { ColorPipe } from '../../pipes/color.pipe';
import { NgStyle, TitleCasePipe } from '@angular/common';
import { BadgeComponent } from '../ui/badge/badge.component';
import { UtilUiService } from '../../services/util-ui.service';
import { ILabelValue } from '../../ts/models/label-value.model';
import { SideMenuRoadmapPipe } from './pipes/side-menu-roadmap.pipe';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RoadmapSummaryComponent } from '../roadmap-summary/roadmap-summary.component';
import { CategoryFilterComponent } from '../category-filter/category-filter.component';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    NgStyle,
    ColorPipe,
    TitleCasePipe,
    BadgeComponent,
    SideMenuRoadmapPipe,
    RoadmapSummaryComponent,
    CategoryFilterComponent
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter, :leave', [
        animate(250)
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideMenuComponent {

  private readonly utilUiService = inject(UtilUiService);

  public categories!: ILabelValue[];

  public onCloseSideMenu(event: Event): void {
    if (!(event.target as HTMLElement).classList.contains('container')) { return; }

    this.utilUiService.toggleSideMenuVisibility();
  }
}
