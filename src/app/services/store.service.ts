import { Sort } from '../ts/enums/sort.enum';
import { IStatus } from '../ts/models/status.model';
import { Category } from '../ts/enums/category.enum';
import { ILabelValue } from '../ts/models/label-value.model';
import { IDataComment } from '../ts/models/data-comment.model';
import { IFilterStore } from '../ts/models/filter-store.model';
import { IFeedbackForm } from '../ts/models/feedback-form.model';
import { IDataCurrentUser } from '../ts/models/data-current-user.model';
import { IDataProductRequest } from '../ts/models/data-product-request.model';
import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private upvotesStore: WritableSignal<string[]> = signal([]);
  private cardsStore: WritableSignal<IDataProductRequest[]> = signal([]);
  private currentUserStore: WritableSignal<IDataCurrentUser | null> = signal(null);
  private filterStore: WritableSignal<IFilterStore> = signal<IFilterStore>(this.getInitialFilterStore);

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

  public getSelectedCard(cardId: string): Signal<IDataProductRequest | null> {
    return computed(() => this.getCardsStore().find(item => item.id.toString() === cardId) || null);
  }

  public setUpvote(cardId: number): void {
    // Addes card id to upvotes record
    this.upvotesStore.update(previous => [...previous, cardId.toString()]);

    this.getCardsStore.update(previous => previous.map(card => {
      if (card.id !== cardId) { return card; }

      return { ...card, upvotes: card.upvotes + 1 };
    }));
  }

  public addComment(cardId: string, comment: string): void {
    this.getCardsStore.update(previous => previous.map(card => {
      const { id, comments } = card;

      if (cardId !== id.toString()) { return card; }

      const existingComments = comments || [];
      const newComment = this.getNewComment(existingComments, comment);

      return { ...card, comments: [...existingComments, newComment] };
    }));
  }

  public getAllAvailableCategories(includeAll: boolean = true): Signal<ILabelValue[]> {
    const allCategory = includeAll ? [{ label: Category.ALL, value: Category.ALL }] : [];

    return computed(() => {
      const categories = Array
        .from(new Set(this.getCardsStore().map(item => item.category)))
        .map(value => ({ label: value, value }));

      return [...allCategory, ...categories];
    });
  }

  public createFeedback(value: IFeedbackForm): void {
    this.getCardsStore.update(previous => ([this.getNewFeedback(previous, value), ...previous]));
  }

  public deleteFeedback(feedbackId: number): void {
    this.getCardsStore.update(previous => previous.filter(item => item.id !== feedbackId));
  }

  public editFeedback(feedbackId: number, formValues: IFeedbackForm): void {
    const { title, detail, status, category } = formValues;

    this.getCardsStore.update(previous => previous.map(item => {
      const { id } = item;

      if (feedbackId !== id) { return item; }

      return { ...item, title, description: detail, status, category };
    }));
  }

  public didUserAlreadyVote(cardId: number): Signal<boolean> {
    return computed(() => this.upvotesStore().some(upvoteId => upvoteId === cardId.toString()));
  }

  public addReply(cardId: string, commentId: number, replyingTo: string, reply: string): void {
    this.getCardsStore.update(previous => previous.map(item => {
      const { id, comments } = item;

      if (cardId !== id.toString()) { return item; }

      const user = this.currentUserStore() as IDataCurrentUser;
      const newComments = (comments as IDataComment[]).map(comment => {
        if (comment.id !== commentId) { return comment; }

        const newReply = { content: reply, user, replyingTo };

        return { ...comment, replies: [...(comment.replies || []), newReply] };
      })

      return { ...item, comments: newComments };
    }));
  }

  public get getSuggestionsCount(): Signal<number> {
    return computed(() => this.getAvailableStatuses().find(statusItem => statusItem.label === 'suggestion')?.quantity || 0);
  }

  public get getAvailableStatuses(): Signal<IStatus[]> {
    return computed(() => this.getCardsStore().reduce((accumulator, item) => {
      const { status } = item;
      const matchingItem = accumulator.find(existingItem => existingItem.label === status);

      if (!matchingItem) { return [...accumulator, { label: status, quantity: 1 }]; }

      return accumulator.map(item => item.label !== matchingItem.label ? item : ({ ...item, quantity: item.quantity + 1 }));
    }, [] as IStatus[]));
  }

  public get getAvailableStatusesInDropdown(): Signal<ILabelValue[]> {
    return computed(() => this.getAvailableStatuses().map(statusItem => ({ label: statusItem.label, value: statusItem.label })));
  }

  public get getCardsStore(): WritableSignal<IDataProductRequest[]> {
    return this.cardsStore;
  }

  public get getFilterStore(): Signal<IFilterStore> {
    return this.filterStore;
  }

  private get getInitialFilterStore(): IFilterStore {
    return { category: Category.ALL, sort: Sort.MOST_UPVOTES };
  }

  private getNewFeedback(cardData: IDataProductRequest[], value: IFeedbackForm): IDataProductRequest {
    const { title, detail, category } = value;
    const id = Math.max(...cardData.map(item => item.id)) + 1;

    return { id, title, category, upvotes: 0, status: 'suggestion', description: detail };
  }

  private getNewComment(comments: IDataComment[], content: string): IDataComment {
    return { id: this.getNewCommentId(comments), content, user: this.currentUserStore() as IDataCurrentUser };
  }

  private getNewCommentId(comments: IDataComment[]): number {
    if (!comments.length) { return 1; }

    return Math.max(...comments.map(comment => comment.id)) + 1;
  }
}
