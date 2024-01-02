import { BadgeComponent } from '../ui/badge/badge.component';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IDataProductRequest } from '../../ts/models/data-product-request.model';
import { BadgeUpvoteComponent } from '../ui/badge-upvote/badge-upvote.component';
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

}
