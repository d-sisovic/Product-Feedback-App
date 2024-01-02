import { Sort } from '../ts/enums/sort.enum';
import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../ts/enums/category.enum';
import { UtilUiService } from '../services/util-ui.service';
import { IFilterStore } from '../ts/models/filter-store.model';
import { IDataProductRequest } from '../ts/models/data-product-request.model';

@Pipe({
  name: 'filterStore',
  standalone: true
})
export class FilterStorePipe implements PipeTransform {

  public transform(cardData: IDataProductRequest[], filterStore: IFilterStore): IDataProductRequest[] {
    const { sort, category } = filterStore;
    const filteredByCategory = this.filterItemsByCategory(cardData, category);

    return this.sortItems(filteredByCategory, sort);
  }

  private getSortOrder(sort: Sort): 'asc' | 'desc' {
    switch (sort) {
      case Sort.LEAST_COMMENTS:
      case Sort.LEAST_UPVOTES:
        return 'asc';
      case Sort.MOST_UPVOTES:
      case Sort.MOST_COMMENTS:
        return 'desc';
    }
  }

  private getSortKey(sort: Sort): keyof IDataProductRequest {
    switch (sort) {
      case Sort.LEAST_COMMENTS:
      case Sort.MOST_COMMENTS:
        return 'comments';
      case Sort.MOST_UPVOTES:
      case Sort.LEAST_UPVOTES:
        return 'upvotes';
    }
  }

  private sortItems(cardData: IDataProductRequest[], sort: Sort): IDataProductRequest[] {
    const key = this.getSortKey(sort);
    const order = this.getSortOrder(sort);

    return UtilUiService.sortByKey(cardData, { key, order });
  }

  private filterItemsByCategory(cardData: IDataProductRequest[], selectedCategory: string): IDataProductRequest[] {
    if (selectedCategory === Category.ALL) { return cardData.slice(); }

    return cardData.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());
  }
}
