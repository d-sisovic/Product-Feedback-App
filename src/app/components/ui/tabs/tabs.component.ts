import { NgClass } from '@angular/common';
import { Tab } from '../../../ts/enums/tab.enum';
import { IStatus } from '../../../ts/models/status.model';
import { TabQuantityPipe } from './pipes/tab-quantity.pipe';
import { StoreService } from '../../../services/store.service';
import { TabHeaderComponent } from './components/tab-header/tab-header.component';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, Signal, inject } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    NgClass,
    TabQuantityPipe,
    TabHeaderComponent
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit {

  @Output() selectTabEvent = new EventEmitter();

  private readonly storeService = inject(StoreService);

  public selectedTab = Tab.PLANNED;
  public availableStatuses!: Signal<IStatus[]>;

  public ngOnInit(): void {
    this.availableStatuses = this.storeService.getAvailableStatuses;

    this.emitSelectTabEvent();
  }

  public onSelectTab(selectedTab: Tab): void {
    this.selectedTab = selectedTab;

    this.emitSelectTabEvent();
  }

  private emitSelectTabEvent(): void {
    this.selectTabEvent.emit(this.selectedTab);
  }

  public get getSelectedTab(): typeof Tab {
    return Tab;
  }
}
