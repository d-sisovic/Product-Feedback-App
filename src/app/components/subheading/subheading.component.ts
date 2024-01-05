import { Router } from '@angular/router';
import { RoutePath } from '../../ts/enums/route-path.enum';
import { StoreService } from '../../services/store.service';
import { UtilUiService } from '../../services/util-ui.service';
import { ButtonComponent } from '../ui/button/button.component';
import { DropdownComponent } from '../ui/dropdown/dropdown.component';
import { SortButtonComponent } from '../ui/sort-button/sort-button.component';
import { ChangeDetectionStrategy, Component, OnInit, Signal, inject } from '@angular/core';

@Component({
  selector: 'app-subheading',
  standalone: true,
  imports: [
    ButtonComponent,
    DropdownComponent,
    SortButtonComponent
  ],
  templateUrl: './subheading.component.html',
  styleUrl: './subheading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubheadingComponent implements OnInit {

  private readonly router = inject(Router);
  private readonly storeService = inject(StoreService);
  private readonly utilUiService = inject(UtilUiService);

  public suggestionCount!: Signal<number>;
  public isTabletDesktopWidth!: Signal<boolean>;

  public ngOnInit(): void {
    this.suggestionCount = this.storeService.getSuggestionsCount;
    this.isTabletDesktopWidth = this.utilUiService.isTabletDesktopWidth;
  }

  public onCreateFeedback(): void {
    this.router.navigateByUrl(RoutePath.CREATE_FEEDBACK);
  }
}
