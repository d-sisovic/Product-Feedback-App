import { Pipe, PipeTransform } from '@angular/core';
import { IStatus } from '../../../ts/models/status.model';

@Pipe({
  name: 'sideMenuRoadmap',
  standalone: true
})
export class SideMenuRoadmapPipe implements PipeTransform {

  public transform(statuses: IStatus[]): IStatus[] {
    return statuses.filter(item => item.label !== 'suggestion');
  }
}
