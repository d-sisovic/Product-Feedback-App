import { Sort } from '../ts/enums/sort.enum';
import { IStatus } from '../ts/models/status.model';
import { Category } from '../ts/enums/category.enum';
import { ILabelValue } from '../ts/models/label-value.model';
import { IFilterStore } from '../ts/models/filter-store.model';
import { IDataCurrentUser } from '../ts/models/data-current-user.model';
import { IDataProductRequest } from '../ts/models/data-product-request.model';
import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private cardsStore: WritableSignal<IDataProductRequest[]> = signal([]);
  private currentUserStore: WritableSignal<IDataCurrentUser | null> = signal(null);
  private filterStore: WritableSignal<IFilterStore> = signal<IFilterStore>({ category: Category.ALL, sort: Sort.MOST_UPVOTES });

  constructor() { }

  public setCardsStore(cardData: IDataProductRequest[]): void {
    this.cardsStore.set(cardData);
  }

  public setCurrentUser(userData: IDataCurrentUser | null): void {
    this.currentUserStore.set(userData);
  }

  public setFilterStoreValue(value: string, key: keyof IFilterStore): void {
    this.filterStore.update(previous => ({ ...previous, [key]: value }));
  }

  public get getAllAvailableCategories(): Signal<ILabelValue[]> {
    return computed(() => {
      const categories = this.getCardsStore().reduce((accumulator, item) => {
        const { category } = item;
        const matchingItem = accumulator.find(existingItem => existingItem.value === category);

        if (matchingItem) { return accumulator; }

        return [...accumulator, { label: category, value: category }];
      }, [] as ILabelValue[]);

      return [{ label: Category.ALL, value: Category.ALL }, ...categories];
    });
  }

  public get getAvailableStatuses(): Signal<IStatus[]> {
    return computed(() => this.getCardsStore().reduce((accumulator, item) => {
      const { status } = item;
      const matchingItem = accumulator.find(existingItem => existingItem.label === status);

      if (!matchingItem) { return [...accumulator, { label: status, quantity: 1 }]; }

      return accumulator.map(item => item.label !== matchingItem.label ? item : ({ ...item, quantity: item.quantity + 1 }));
    }, [] as IStatus[]));
  }

  public get getCardsStore(): WritableSignal<IDataProductRequest[]> {
    return this.cardsStore;
  }

  public get getFilterStore(): WritableSignal<IFilterStore> {
    return this.filterStore;
  }
}
