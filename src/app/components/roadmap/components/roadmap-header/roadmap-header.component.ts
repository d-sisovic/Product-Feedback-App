import { Router } from '@angular/router';
import { RoutePath } from '../../../../ts/enums/route-path.enum';
import { ButtonComponent } from '../../../ui/button/button.component';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
  selector: 'app-roadmap-header',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './roadmap-header.component.html',
  styleUrl: './roadmap-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoadmapHeaderComponent {

  private router: Router = inject(Router);

  public onGoBack(): void {
    this.router.navigateByUrl('');
  }

  public onAddFeedback(): void {
    this.router.navigateByUrl(RoutePath.CREATE_FEEDBACK);
  }
}
