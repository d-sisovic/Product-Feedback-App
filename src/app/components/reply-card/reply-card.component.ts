import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { InputComponent } from '../ui/input/input.component';
import { ButtonComponent } from '../ui/button/button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';

@Component({
  selector: 'app-reply-card',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule
  ],
  templateUrl: './reply-card.component.html',
  styleUrl: './reply-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReplyCardComponent implements OnInit {

  @Output() addReplyEvent = new EventEmitter();

  @Input({ required: true }) commentId!: number;
  @Input({ required: true }) replyingTo!: string;

  private readonly formBuilder = inject(FormBuilder);
  private readonly storeService = inject(StoreService);
  private readonly activatedRoute = inject(ActivatedRoute);

  public cardId!: string;
  public replyForm!: FormGroup;

  public ngOnInit(): void {
    this.buildForm();
    this.cardId = this.activatedRoute.snapshot.params['id'];
  }

  public onPostReply(): void {
    this.storeService.addReply(this.cardId, this.commentId, this.replyingTo, this.replyForm.value.reply);
    this.addReplyEvent.emit();
  }

  private buildForm(): void {
    this.replyForm = this.formBuilder.group({});
  }
}
