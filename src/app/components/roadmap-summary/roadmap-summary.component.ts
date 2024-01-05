import { Router } from '@angular/router';
import { ColorPipe } from '../../pipes/color.pipe';
import { IStatus } from '../../ts/models/status.model';
import { NgStyle, TitleCasePipe } from '@angular/common';
import { RoutePath } from '../../ts/enums/route-path.enum';
import { StoreService } from '../../services/store.service';
import { Component, OnInit, Signal, inject } from '@angular/core';
import { SideMenuRoadmapPipe } from '../side-menu/pipes/side-menu-roadmap.pipe';

@Component({
  selector: 'app-roadmap-summary',
  standalone: true,
  imports: [
    NgStyle,
    ColorPipe,
    TitleCasePipe,
    SideMenuRoadmapPipe
  ],
  templateUrl: './roadmap-summary.component.html',
  styleUrl: './roadmap-summary.component.scss'
})
export class RoadmapSummaryComponent implements OnInit {

  private readonly router = inject(Router);
  private readonly storeService = inject(StoreService);

  public availableStatuses!: Signal<IStatus[]>;

  public ngOnInit(): void {
    this.availableStatuses = this.storeService.getAvailableStatuses;
  }

  public onViewRoadmap(): void {
    this.router.navigateByUrl(RoutePath.ROADMAP);
  }
}
