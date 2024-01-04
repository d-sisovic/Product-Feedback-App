import { Tab } from '../../../../../ts/enums/tab.enum';
import { IStatus } from '../../../../../ts/models/status.model';
import { TabQuantityPipe } from '../../pipes/tab-quantity.pipe';
import { StoreService } from '../../../../../services/store.service';
import { ChangeDetectionStrategy, Component, Input, Signal, inject } from '@angular/core';

@Component({
  selector: 'app-tab-header',
  standalone: true,
  imports: [
    TabQuantityPipe
  ],
  templateUrl: './tab-header.component.html',
  styleUrl: './tab-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabHeaderComponent {

  @Input({ required: true }) label!: string;
  @Input({ required: true }) selectedTab!: Tab;

  private readonly storeService = inject(StoreService);

  public availableStatuses!: Signal<IStatus[]>;

  public ngOnInit(): void {
    this.availableStatuses = this.storeService.getAvailableStatuses;
  }

  public get getSelectedTab(): typeof Tab {
    return Tab;
  }
}
