import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge-upvote',
  standalone: true,
  imports: [],
  templateUrl: './badge-upvote.component.html',
  styleUrl: './badge-upvote.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeUpvoteComponent {

  @Input({ required: true }) value!: number;

}
