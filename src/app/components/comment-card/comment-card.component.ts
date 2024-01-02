import { IDataReply } from '../../ts/models/data-reply.model';
import { IDataComment } from '../../ts/models/data-comment.model';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  standalone: true,
  imports: [],
  templateUrl: './comment-card.component.html',
  styleUrl: './comment-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentCardComponent {

  @Input() replyMode!: boolean;
  @Input({ required: true }) comment!: IDataComment | IDataReply;
}
