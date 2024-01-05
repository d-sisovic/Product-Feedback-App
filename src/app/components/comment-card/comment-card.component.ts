import { NgClass } from '@angular/common';
import { IDataReply } from '../../ts/models/data-reply.model';
import { UtilUiService } from '../../services/util-ui.service';
import { IDataComment } from '../../ts/models/data-comment.model';
import { ChangeDetectionStrategy, Component, Input, OnInit, Signal, inject } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './comment-card.component.html',
  styleUrl: './comment-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentCardComponent implements OnInit {

  @Input() replyMode!: boolean;
  @Input({ required: true }) comment!: IDataComment | IDataReply;

  private readonly utilUiService = inject(UtilUiService);

  public isTabletDesktopWidth!: Signal<boolean>;

  public ngOnInit(): void {
    this.isTabletDesktopWidth = this.utilUiService.isTabletDesktopWidth;
  }
}
