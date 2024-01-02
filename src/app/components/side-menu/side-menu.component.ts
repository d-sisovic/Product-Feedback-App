import { ColorPipe } from '../../pipes/color.pipe';
import { IStatus } from '../../ts/models/status.model';
import { NgStyle, TitleCasePipe } from '@angular/common';
import { StoreService } from '../../services/store.service';
import { BadgeComponent } from '../ui/badge/badge.component';
import { UtilUiService } from '../../services/util-ui.service';
import { ILabelValue } from '../../ts/models/label-value.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit, Signal, inject } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    NgStyle,
    ColorPipe,
    TitleCasePipe,
    BadgeComponent
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
export class SideMenuComponent implements OnInit {

  private readonly storeService = inject(StoreService);
  private readonly utilUiService = inject(UtilUiService);

  public selectedCategory!: string;
  public categories!: ILabelValue[];

  public matchingStatuses!: Signal<IStatus[]>;
  public availableCategories!: Signal<ILabelValue[]>;

  public ngOnInit(): void {
    this.setInitialCategory();

    this.matchingStatuses = this.storeService.getAvailableStatuses;
    this.availableCategories = this.storeService.getAllAvailableCategories;
  }

  private setInitialCategory(): void {
    const { category } = this.storeService.getFilterStore();

    this.selectedCategory = category;
  }

  public onCloseSideMenu(event: Event): void {
    if (!(event.target as HTMLElement).classList.contains('container')) { return; }

    this.utilUiService.toggleSideMenuVisibility();
  }

  public onSetBadge(selectedCategory: string): void {
    this.selectedCategory = selectedCategory;

    this.storeService.setFilterStoreValue(selectedCategory, 'category');
  }
}
