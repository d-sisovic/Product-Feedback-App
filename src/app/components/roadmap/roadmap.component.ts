import { Tab } from '../../ts/enums/tab.enum';
import { NgTemplateOutlet } from '@angular/common';
import { TabsComponent } from '../ui/tabs/tabs.component';
import { RoadmapListPipe } from './pipes/roadmap-list.pipe';
import { StoreService } from '../../services/store.service';
import { UtilUiService } from '../../services/util-ui.service';
import { IDataProductRequest } from '../../ts/models/data-product-request.model';
import { RoadmapCardComponent } from './components/roadmap-card/roadmap-card.component';
import { TabHeaderComponent } from '../ui/tabs/components/tab-header/tab-header.component';
import { ChangeDetectionStrategy, Component, OnInit, Signal, inject } from '@angular/core';
import { RoadmapHeaderComponent } from './components/roadmap-header/roadmap-header.component';

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [
    TabsComponent,
    RoadmapListPipe,
    NgTemplateOutlet,
    TabHeaderComponent,
    RoadmapCardComponent,
    RoadmapHeaderComponent
  ],
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoadmapComponent implements OnInit {

  private readonly storeService = inject(StoreService);
  private readonly utilUiService = inject(UtilUiService);

  public selectedTab!: Tab;
  public tabIndex: number = 0;

  public isTabletDesktopWidth!: Signal<boolean>;
  public cardData!: Signal<IDataProductRequest[]>;

  public ngOnInit(): void {
    this.cardData = this.storeService.getCardsStore;
    this.isTabletDesktopWidth = this.utilUiService.isTabletDesktopWidth;
  }

  public onSelectTab(selectedTab: Tab): void {
    this.selectedTab = selectedTab;

    this.setSelectedTab(selectedTab);
  }

  private setSelectedTab(selectedTab: Tab): void {
    switch (selectedTab) {
      case Tab.PLANNED:
        this.tabIndex = 0;
        break;
      case Tab.IN_PROGRESS:
        this.tabIndex = 1;
        break;
      case Tab.LIVE:
        this.tabIndex = 2;
        break;
    }
  }

  public get getSelectedTab(): typeof Tab {
    return Tab;
  }
}
