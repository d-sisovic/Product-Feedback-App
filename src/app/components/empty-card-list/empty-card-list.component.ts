import { Router } from '@angular/router';
import { RoutePath } from '../../ts/enums/route-path.enum';
import { ButtonComponent } from '../ui/button/button.component';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
  selector: 'app-empty-card-list',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './empty-card-list.component.html',
  styleUrl: './empty-card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyCardListComponent {

  private readonly router = inject(Router);

  public onCreateFeedback(): void {
    this.router.navigateByUrl(RoutePath.CREATE_FEEDBACK);
  }
}
