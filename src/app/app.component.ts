import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UtilUiService } from './services/util-ui.service';
import { CardHttpService } from './services/card-http.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.utilUiService.setInnerWidth(window.innerWidth);
  }

  private readonly destroyRef = inject(DestroyRef);
  private readonly utilUiService = inject(UtilUiService);
  private readonly cardHttpService = inject(CardHttpService);

  public ngOnInit(): void {
    this.cardHttpService.fetchData$()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
}
