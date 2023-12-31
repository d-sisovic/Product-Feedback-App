import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge-comment',
  standalone: true,
  imports: [],
  templateUrl: './badge-comment.component.html',
  styleUrl: './badge-comment.component.scss'
})
export class BadgeCommentComponent {

  @Input({ required: true }) numberOfComments!: number;

}
