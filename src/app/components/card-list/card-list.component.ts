import { CardComponent } from '../card/card.component';
import { StoreService } from '../../services/store.service';
import { IDataProductRequest } from '../../ts/models/data-product-request.model';
import { ChangeDetectionStrategy, Component, OnInit, WritableSignal, inject } from '@angular/core';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardListComponent implements OnInit {

  private readonly storeService = inject(StoreService);

  public cardData!: WritableSignal<IDataProductRequest[]>;

  public ngOnInit(): void {
    this.cardData = this.storeService.getCardsStore;
  }
}
