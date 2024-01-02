import { UtilUiService } from '../../services/util-ui.service';
import { ChangeDetectionStrategy, Component, OnInit, WritableSignal, inject } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadingComponent implements OnInit {

  public utilUiService = inject(UtilUiService);

  public showSideMenu!: WritableSignal<boolean>;

  public ngOnInit(): void {
    this.showSideMenu = this.utilUiService.getSideMenuVisible;
  }

  public onToggleMenu(): void {
    this.utilUiService.toggleSideMenuVisibility();
  }
}
