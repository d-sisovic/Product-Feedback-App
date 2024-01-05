import { StoreService } from '../../services/store.service';
import { BadgeComponent } from '../ui/badge/badge.component';
import { ILabelValue } from '../../ts/models/label-value.model';
import { ChangeDetectionStrategy, Component, OnInit, Signal, inject } from '@angular/core';

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryFilterComponent implements OnInit {

  private readonly storeService = inject(StoreService);

  public selectedCategory!: string;
  public availableCategories!: Signal<ILabelValue[]>;

  public ngOnInit(): void {
    this.setInitialCategory();

    this.availableCategories = this.storeService.getAllAvailableCategories();
  }

  public onSetBadge(selectedCategory: string): void {
    this.selectedCategory = selectedCategory;

    this.storeService.setFilterStoreValue(selectedCategory, 'category');
  }

  private setInitialCategory(): void {
    const { category } = this.storeService.getFilterStore();

    this.selectedCategory = category;
  }
}
