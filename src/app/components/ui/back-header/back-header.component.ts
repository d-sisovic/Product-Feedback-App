import { Router } from '@angular/router';
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

  private readonly router = inject(Router);

  public onGoBack(): void {
    this.router.navigateByUrl('');
  }
}
