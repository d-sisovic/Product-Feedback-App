import { UtilUiService } from '../../../services/util-ui.service';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
  selector: 'app-back-header',
  standalone: true,
  imports: [],
  templateUrl: './back-header.component.html',
  styleUrl: './back-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackHeaderComponent {

  private readonly utilUiService = inject(UtilUiService);

  public onGoBack(): void {
    this.utilUiService.goBack();
  }
}
