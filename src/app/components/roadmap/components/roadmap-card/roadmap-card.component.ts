import { BadgeComponent } from '../../../ui/badge/badge.component';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IDataProductRequest } from '../../../../ts/models/data-product-request.model';
import { BadgeStatusComponent } from '../../../ui/badge-status/badge-status.component';
import { BadgeUpvoteComponent } from '../../../ui/badge-upvote/badge-upvote.component';
import { BadgeCommentComponent } from '../../../ui/badge-comment/badge-comment.component';

@Component({
  selector: 'app-roadmap-card',
  standalone: true,
  imports: [
    BadgeComponent,
    BadgeUpvoteComponent,
    BadgeStatusComponent,
    BadgeCommentComponent
  ],
  templateUrl: './roadmap-card.component.html',
  styleUrl: './roadmap-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoadmapCardComponent {

  @Input({ required: true }) index!: number;
  @Input({ required: true }) card!: IDataProductRequest;
}
