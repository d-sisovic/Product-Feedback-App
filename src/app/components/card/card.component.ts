import { Router } from '@angular/router';
import { RoutePath } from '../../ts/enums/route-path.enum';
import { BadgeComponent } from '../ui/badge/badge.component';
import { UtilUiService } from '../../services/util-ui.service';
import { IDataProductRequest } from '../../ts/models/data-product-request.model';
import { BadgeUpvoteComponent } from '../ui/badge-upvote/badge-upvote.component';
import { BadgeCommentComponent } from '../ui/badge-comment/badge-comment.component';
import { ChangeDetectionStrategy, Component, Input, OnInit, Signal, inject } from '@angular/core';

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
export class CardComponent implements OnInit {

  @Input({ required: true }) card!: IDataProductRequest;

  private readonly router = inject(Router);
  private readonly utilUiService = inject(UtilUiService);

  public isTabletDesktopWidth!: Signal<boolean>;

  public ngOnInit(): void {
    this.isTabletDesktopWidth = this.utilUiService.isTabletDesktopWidth;
  }

  public onEditFeedback(): void {
    this.router.navigateByUrl(`${RoutePath.EDIT}/${this.card.id}`);
  }
}
