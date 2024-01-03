import { Router } from '@angular/router';
import { RoutePath } from '../../ts/enums/route-path.enum';
import { ButtonComponent } from '../ui/button/button.component';
import { DropdownComponent } from '../ui/dropdown/dropdown.component';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SortButtonComponent } from '../ui/sort-button/sort-button.component';

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
export class SubheadingComponent {

  private readonly router = inject(Router);

  public onCreateFeedback(): void {
    this.router.navigateByUrl(RoutePath.CREATE_FEEDBACK);
  }
}
