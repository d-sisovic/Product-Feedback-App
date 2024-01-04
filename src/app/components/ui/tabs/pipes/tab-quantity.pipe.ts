import { Pipe, PipeTransform } from '@angular/core';
import { Tab } from '../../../../ts/enums/tab.enum';
import { IStatus } from '../../../../ts/models/status.model';

@Pipe({
  name: 'tabQuantity',
  standalone: true
})
export class TabQuantityPipe implements PipeTransform {

  public transform(availableStatuses: IStatus[], selectedTab: Tab): number {
    return availableStatuses.find(statusItem => statusItem.label === selectedTab)?.quantity || 0;
  }
}
