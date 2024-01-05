import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge-upvote',
  standalone: true,
  imports: [NgClass],
  templateUrl: './badge-upvote.component.html',
  styleUrl: './badge-upvote.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeUpvoteComponent {

  @Input() rowUpvote!: boolean;
  @Input({ required: true }) value!: number;
}
