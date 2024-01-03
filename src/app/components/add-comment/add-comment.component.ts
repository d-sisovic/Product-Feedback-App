import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { ButtonComponent } from '../ui/button/button.component';
import { TextareaComponent } from '../ui/textarea/textarea.component';
import { AddCommentFormService } from './services/add-comment-form.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-add-comment',
  standalone: true,
  imports: [
    ButtonComponent,
    TextareaComponent,
    ReactiveFormsModule
  ],
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCommentComponent implements OnInit {

  private readonly storeService = inject(StoreService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly addCommentFormService = inject(AddCommentFormService);

  public cardId!: string;
  public maxLength = 250;
  public addCommentForm!: FormGroup;
  public formControlName = 'comment';

  public ngOnInit(): void {
    this.cardId = this.activatedRoute.snapshot.params['id'];
    this.addCommentForm = this.addCommentFormService.buildAddCommentForm();
  }

  public onAddComment(): void {
    this.storeService.addComment(this.cardId, this.getCommentFormControl.value);

    this.getCommentFormControl.setValue('');
  }

  public get getCommentFormControl(): FormControl {
    return this.addCommentForm.controls[this.formControlName] as FormControl;
  }
}
