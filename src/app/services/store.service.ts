import { Injectable, WritableSignal, signal } from '@angular/core';
import { IDataCurrentUser } from '../ts/models/data-current-user.model';
import { IDataProductRequest } from '../ts/models/data-product-request.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private cardsStore: WritableSignal<IDataProductRequest[]> = signal([]);
  private currentUserStore: WritableSignal<IDataCurrentUser | null> = signal(null);

  constructor() { }

  public setCardsStore(cardData: IDataProductRequest[]): void {
    this.cardsStore.set(cardData);
  }

  public setCurrentUser(userData: IDataCurrentUser | null): void {
    this.currentUserStore.set(userData);
  }

  public get getCardsStore(): WritableSignal<IDataProductRequest[]> {
    return this.cardsStore;
  }
}
