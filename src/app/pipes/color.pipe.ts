import { Pipe, PipeTransform } from '@angular/core';
import { UtilUiService } from '../services/util-ui.service';

@Pipe({
  name: 'color',
  standalone: true
})
export class ColorPipe implements PipeTransform {

  public transform(index: number): string {
    return UtilUiService.getColorByIndex(index);
  }
}
