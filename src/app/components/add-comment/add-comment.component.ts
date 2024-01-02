import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TextareaComponent } from '../ui/textarea/textarea.component';

@Component({
  selector: 'app-add-comment',
  standalone: true,
  imports: [TextareaComponent],
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCommentComponent {

}
