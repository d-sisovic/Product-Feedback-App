import { Router } from '@angular/router';
import { RoutePath } from '../../ts/enums/route-path.enum';
import { BadgeComponent } from '../ui/badge/badge.component';
import { IDataProductRequest } from '../../ts/models/data-product-request.model';
import { BadgeUpvoteComponent } from '../ui/badge-upvote/badge-upvote.component';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { BadgeCommentComponent } from '../ui/badge-comment/badge-comment.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    BadgeComponent,
    BadgeUpvoteComponent,
    BadgeCommentComponent
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  @Input({ required: true }) card!: IDataProductRequest;

  private readonly router = inject(Router);

  public onEditFeedback(): void {
    this.router.navigateByUrl(`${RoutePath.EDIT}/${this.card.id}`);
  }
}
