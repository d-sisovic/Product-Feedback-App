import { NgClass } from '@angular/common';
import { IDataComment } from '../../ts/models/data-comment.model';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AddCommentComponent } from '../add-comment/add-comment.component';
import { CommentCardComponent } from '../comment-card/comment-card.component';

@Component({
  selector: 'app-comments-list',
  standalone: true,
  imports: [
    NgClass,
    AddCommentComponent,
    CommentCardComponent,
  ],
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsListComponent {

  @Input({ required: true }) comments!: IDataComment[];
}
