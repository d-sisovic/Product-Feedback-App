import { NgClass } from '@angular/common';
import { StoreService } from '../../../services/store.service';
import { IDataProductRequest } from '../../../ts/models/data-product-request.model';
import { ChangeDetectionStrategy, Component, Input, OnInit, Signal, inject } from '@angular/core';

@Component({
  selector: 'app-badge-upvote',
  standalone: true,
  imports: [NgClass],
  templateUrl: './badge-upvote.component.html',
  styleUrl: './badge-upvote.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeUpvoteComponent implements OnInit {

  @Input() rowUpvote!: boolean;
  @Input({ required: true }) card!: IDataProductRequest;

  private readonly storeService = inject(StoreService);

  public userAlreadyVote!: Signal<boolean>;

  public ngOnInit(): void {
    this.userAlreadyVote = this.storeService.didUserAlreadyVote(this.card.id);
  }

  public onUpvote(event: Event): void {
    event.stopPropagation();

    if (this.userAlreadyVote()) { return; }

    this.storeService.setUpvote(this.card.id);
  }
}
