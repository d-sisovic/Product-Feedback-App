import { NgClass } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { StoreService } from '../../services/store.service';
import { UtilUiService } from '../../services/util-ui.service';
import { FilterStorePipe } from '../../pipes/filter-store.pipe';
import { IFilterStore } from '../../ts/models/filter-store.model';
import { IDataProductRequest } from '../../ts/models/data-product-request.model';
import { EmptyCardListComponent } from '../empty-card-list/empty-card-list.component';
import { ChangeDetectionStrategy, Component, OnInit, Signal, inject } from '@angular/core';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [
    NgClass,
    CardComponent,
    FilterStorePipe,
    EmptyCardListComponent
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardListComponent implements OnInit {

  private readonly storeService = inject(StoreService);
  private readonly utilUiService = inject(UtilUiService);

  public showSideMenu!: Signal<boolean>;
  public filterStore!: Signal<IFilterStore>;
  public cardData!: Signal<IDataProductRequest[]>;

  public ngOnInit(): void {
    this.cardData = this.storeService.getCardsStore;
    this.filterStore = this.storeService.getFilterStore;
    this.showSideMenu = this.utilUiService.getSideMenuVisible;
  }
}
