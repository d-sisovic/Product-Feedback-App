import { UtilUiService } from '../../services/util-ui.service';
import { HeadingComponent } from '../heading/heading.component';
import { CardListComponent } from '../card-list/card-list.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { SubheadingComponent } from '../subheading/subheading.component';
import { ChangeDetectionStrategy, Component, OnInit, WritableSignal, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeadingComponent,
    SideMenuComponent,
    CardListComponent,
    SubheadingComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  private readonly utilUiService = inject(UtilUiService);

  public showSideMenu!: WritableSignal<boolean>;

  public ngOnInit(): void {
    this.showSideMenu = this.utilUiService.getSideMenuVisible;
  }
}
