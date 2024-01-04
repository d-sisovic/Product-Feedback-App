import { ColorPipe } from './../../../pipes/color.pipe';
import { NgStyle, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge-status',
  standalone: true,
  imports: [
    NgStyle,
    ColorPipe,
    TitleCasePipe
  ],
  templateUrl: './badge-status.component.html',
  styleUrl: './badge-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeStatusComponent {

  @Input({ required: true }) index!: number;
  @Input({ required: true }) label!: string;
}
