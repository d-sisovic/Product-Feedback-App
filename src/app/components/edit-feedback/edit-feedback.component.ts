import { CardComponent } from '../card/card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { ButtonComponent } from '../ui/button/button.component';
import { ButtonColor } from '../ui/button/ts/enums/button-color.enum';
import { BackHeaderComponent } from '../ui/back-header/back-header.component';
import { CommentsListComponent } from '../comments-list/comments-list.component';
import { IDataProductRequest } from '../../ts/models/data-product-request.model';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-edit-feedback',
  standalone: true,
  imports: [
    CardComponent,
    ButtonComponent,
    BackHeaderComponent,
    CommentsListComponent
  ],
  templateUrl: './edit-feedback.component.html',
  styleUrl: './edit-feedback.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditFeedbackComponent implements OnInit {

  private readonly router = inject(Router);
  private readonly storeService = inject(StoreService);
  private readonly activatedRoute = inject(ActivatedRoute);

  public selectedCard!: IDataProductRequest;

  public ngOnInit(): void {
    this.setSelectedCard();
  }

  private setSelectedCard(): void {
    const cardId = this.activatedRoute.snapshot.params['id'];
    const selectedCard = this.storeService.getSelectedCard(cardId);

    if (selectedCard) {
      this.selectedCard = selectedCard;
      return;
    }

    this.router.navigateByUrl('');
  }

  public get getButtonColor(): typeof ButtonColor {
    return ButtonColor;
  }
}
