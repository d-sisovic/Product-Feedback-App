import { CardComponent } from '../card/card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { ButtonComponent } from '../ui/button/button.component';
import { ButtonColor } from '../ui/button/ts/enums/button-color.enum';
import { BackHeaderComponent } from '../ui/back-header/back-header.component';
import { CommentsListComponent } from '../comments-list/comments-list.component';
import { IDataProductRequest } from '../../ts/models/data-product-request.model';
import { ChangeDetectionStrategy, Component, OnInit, Signal, inject } from '@angular/core';
import { RoutePath } from '../../ts/enums/route-path.enum';

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

  public selectedCard!: Signal<IDataProductRequest | null>;

  public ngOnInit(): void {
    this.setSelectedCard();
  }

  private setSelectedCard(): void {
    const cardId = this.activatedRoute.snapshot.params['id'];
    this.selectedCard = this.storeService.getSelectedCard(cardId);

    if (!this.selectedCard()) {
      this.router.navigateByUrl('');
    }
  }

  public onEditFeedback(): void {
    this.router.navigateByUrl(`${RoutePath.EDIT_FEEDBACK}/${this.selectedCard()?.id}`);
  }

  public get getButtonColor(): typeof ButtonColor {
    return ButtonColor;
  }
}
