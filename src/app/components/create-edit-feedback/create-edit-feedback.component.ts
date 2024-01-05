import { AsyncPipe } from '@angular/common';
import { Observable, map, startWith } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutePath } from '../../ts/enums/route-path.enum';
import { StoreService } from '../../services/store.service';
import { InputComponent } from '../ui/input/input.component';
import { UtilUiService } from '../../services/util-ui.service';
import { ILabelValue } from '../../ts/models/label-value.model';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from '../ui/select/select.component';
import { ButtonComponent } from '../ui/button/button.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IFeedbackForm } from '../../ts/models/feedback-form.model';
import { ButtonColor } from '../ui/button/ts/enums/button-color.enum';
import { BackHeaderComponent } from '../ui/back-header/back-header.component';
import { IDataProductRequest } from '../../ts/models/data-product-request.model';
import { CreateEditFeedbackService } from './services/create-edit-feedback.service';
import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, OnInit, Signal, inject, signal } from '@angular/core';

@Component({
  selector: 'app-create-edit-feedback',
  standalone: true,
  imports: [
    AsyncPipe,
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
  private readonly destroyRef = inject(DestroyRef);
  private readonly storeService = inject(StoreService);
  private readonly utilUiService = inject(UtilUiService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly createEditFeedbackService = inject(CreateEditFeedbackService);

  public isAddMode!: boolean;
  public createEditFeedbackForm!: FormGroup;
  public formDisabled$!: Observable<boolean>;
  public statusDropdownValues!: Signal<ILabelValue[]>;
  public categoryDropdownValues!: Signal<ILabelValue[]>;

  public selectedCard = signal<IDataProductRequest | null>(null);

  public ngOnInit(): void {
    this.setDropdownValues();

    this.buildForm();
    this.setIsAddMode();
  }

  public ngAfterViewInit(): void {
    this.handleSetFormValues();
  }

  private setDropdownValues(): void {
    this.statusDropdownValues = this.storeService.getAvailableStatusesInDropdown;
    this.categoryDropdownValues = this.storeService.getAllAvailableCategories(false);
  }

  private handleSetFormValues(): void {
    if (this.isAddMode) { return; }

    const cardId = this.activatedRoute.snapshot.params['id'];
    const matchingCard = this.storeService.getSelectedCard(cardId)();

    this.selectedCard.set(matchingCard);

    if (matchingCard) {
      this.setFormValues();
      this.watchFormChanges();
      return;
    }

    this.onCancel();
  }

  private setFormValues(): void {
    this.createEditFeedbackForm.setValue(this.getFormValuesFromCard);
  }

  private watchFormChanges(): void {
    const initialFormValues = JSON.stringify(this.getFormValuesFromCard);

    this.formDisabled$ = this.createEditFeedbackForm.valueChanges
      .pipe(
        startWith(this.createEditFeedbackForm.value),
        takeUntilDestroyed(this.destroyRef),
        map(formValues => {
          const formInvalid = !this.createEditFeedbackForm.valid;
          const formUnchanged = JSON.stringify(formValues) === initialFormValues;

          return formInvalid || formUnchanged;
        })
      );
  }

  private get getFormValuesFromCard(): IFeedbackForm {
    const { status, category, title, description } = this.selectedCard() as IDataProductRequest;

    return { status, category, title, detail: description };
  }

  private setIsAddMode(): void {
    this.isAddMode = this.router.url === `/${RoutePath.CREATE_FEEDBACK}`;
  }

  private buildForm(): void {
    this.createEditFeedbackForm = this.createEditFeedbackService.buildForm();
  }

  public onSetCategory(category: string): void {
    this.createEditFeedbackForm.patchValue({ category });
  }

  public onSetStatus(status: string): void {
    this.createEditFeedbackForm.patchValue({ status });
  }

  public onCancel(): void {
    this.utilUiService.goBack();
  }

  public onDelete(): void {
    const { id } = this.selectedCard() as IDataProductRequest;

    this.storeService.deleteFeedback(id);
    this.onCancel();
  }

  public onEditFeedback(): void {
    const { id } = this.selectedCard() as IDataProductRequest;

    this.storeService.editFeedback(id, this.createEditFeedbackForm.value);
    this.onCancel();
  }

  public onCreateFeedback(): void {
    const { valid, value } = this.createEditFeedbackForm;

    if (!valid) { return; }

    this.storeService.createFeedback(value);
    this.onCancel();
  }

  public get getButtonColor(): typeof ButtonColor {
    return ButtonColor;
  }
}
