import { ActivatedRoute, Router } from '@angular/router';
import { RoutePath } from '../../ts/enums/route-path.enum';
import { StoreService } from '../../services/store.service';
import { InputComponent } from '../ui/input/input.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from '../ui/select/select.component';
import { ButtonComponent } from '../ui/button/button.component';
import { ButtonColor } from '../ui/button/ts/enums/button-color.enum';
import { BackHeaderComponent } from '../ui/back-header/back-header.component';
import { IDataProductRequest } from '../../ts/models/data-product-request.model';
import { CreateEditFeedbackService } from './services/create-edit-feedback.service';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';

@Component({
  selector: 'app-create-edit-feedback',
  standalone: true,
  imports: [
    InputComponent,
    SelectComponent,
    ButtonComponent,
    BackHeaderComponent,
    ReactiveFormsModule
  ],
  templateUrl: './create-edit-feedback.component.html',
  styleUrl: './create-edit-feedback.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEditFeedbackComponent implements OnInit, AfterViewInit {

  private readonly router = inject(Router);
  private readonly storeService = inject(StoreService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly createEditFeedbackService = inject(CreateEditFeedbackService);

  public isAddMode!: boolean;
  public createEditFeedbackForm!: FormGroup;
  public selectedCard = signal<IDataProductRequest | null>(null);

  public ngOnInit(): void {
    this.buildForm();
    this.setIsAddMode();
  }

  public ngAfterViewInit(): void {
    this.handleSetFormValues();
  }

  public onSetCategory(category: string): void {
    this.createEditFeedbackForm.patchValue({ category });
  }

  public onCancel(): void {
    this.router.navigateByUrl('');
  }

  public onSubmit(): void {
    const { valid, value } = this.createEditFeedbackForm;

    if (!valid) { return; }

    this.storeService.createFeedback(value);
    this.onCancel();
  }

  public get getButtonColor(): typeof ButtonColor {
    return ButtonColor;
  }

  private handleSetFormValues(): void {
    if (this.isAddMode) { return; }

    const cardId = this.activatedRoute.snapshot.params['id'];
    const matchingCard = this.storeService.getSelectedCard(cardId)();

    this.selectedCard.set(matchingCard);

    if (matchingCard) {
      this.setFormValues();
      return;
    }

    this.onCancel();
  }

  private setFormValues(): void {
    const { title, description, category } = this.selectedCard() as IDataProductRequest;

    this.createEditFeedbackForm.setValue({ title, category, detail: description });
  }

  private setIsAddMode(): void {
    this.isAddMode = this.router.url === `/${RoutePath.CREATE_FEEDBACK}`;
  }

  private buildForm(): void {
    this.createEditFeedbackForm = this.createEditFeedbackService.buildForm();
  }
}
