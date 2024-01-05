import { NgClass } from '@angular/common';
import { IDataReply } from '../../ts/models/data-reply.model';
import { UtilUiService } from '../../services/util-ui.service';
import { IDataComment } from '../../ts/models/data-comment.model';
import { ReplyCardComponent } from '../reply-card/reply-card.component';
import { ChangeDetectionStrategy, Component, Input, OnInit, Signal, inject } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  standalone: true,
  imports: [
    NgClass,
    ReplyCardComponent
  ],
  templateUrl: './comment-card.component.html',
  styleUrl: './comment-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentCardComponent implements OnInit {

  @Input() replyMode!: boolean;
  @Input({ required: true }) commentId!: number;
  @Input({ required: true }) comment!: IDataComment | IDataReply;

  private readonly utilUiService = inject(UtilUiService);

  public addReply!: boolean;
  public isTabletDesktopWidth!: Signal<boolean>;

  public ngOnInit(): void {
    this.isTabletDesktopWidth = this.utilUiService.isTabletDesktopWidth;
  }

  public onOpenReply(): void {
    this.addReply = true;
  }

  public onCloseReply(): void {
    this.addReply = false;
  }
}
