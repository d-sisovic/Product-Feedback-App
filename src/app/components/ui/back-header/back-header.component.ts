import { Router } from '@angular/router';
import { Location } from '@angular/common';
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
  private readonly location = inject(Location);

  public onGoBack(): void {
    if (this.router.navigated) {
      this.location.back();
      return;
    }

    this.router.navigateByUrl('');
  }
}
