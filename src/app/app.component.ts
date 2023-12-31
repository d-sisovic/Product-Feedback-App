import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardHttpService } from './services/card-http.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  private readonly destroyRef = inject(DestroyRef);
  private readonly cardHttpService = inject(CardHttpService);

  public ngOnInit(): void {
      this.cardHttpService.fetchDataUrl$()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
}
