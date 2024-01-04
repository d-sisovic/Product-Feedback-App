import { Tab } from '../../../ts/enums/tab.enum';
import { Pipe, PipeTransform } from '@angular/core';
import { IDataProductRequest } from '../../../ts/models/data-product-request.model';

@Pipe({
  name: 'roadmapList',
  standalone: true
})
export class RoadmapListPipe implements PipeTransform {

  public transform(cards: IDataProductRequest[], selectedTab: Tab): IDataProductRequest[] {
    return cards.filter(card => card.status === selectedTab);
  }
}
