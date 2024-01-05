import { NgClass, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [
    NgClass,
    TitleCasePipe
  ],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent {

  @Output() selectBadge = new EventEmitter<string>();

  @Input() selected!: boolean;
  @Input() readonly!: boolean;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) value!: string;

  public onSelect(): void {
    this.selectBadge.emit(this.value);
  }
}
