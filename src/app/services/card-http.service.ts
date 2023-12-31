
import { Observable, tap } from 'rxjs';
import { StoreService } from './store.service';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IDataResponse } from '../ts/models/data-response.model';

@Injectable({
  providedIn: 'root'
})
export class CardHttpService {

  private dataUrl: string = 'assets/data.json';

  private readonly http = inject(HttpClient);
  private readonly storeService = inject(StoreService);

  constructor() { }

  public fetchDataUrl$(): Observable<any> {
    return this.http.get<IDataResponse>(this.dataUrl)
    .pipe(
      tap(response => {
          const { currentUser, productRequests } = response;

          this.storeService.setCurrentUser(currentUser);
          this.storeService.setCardsStore(productRequests);
      })
    );
  }
}
