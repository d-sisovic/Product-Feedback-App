import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ISort } from '../ts/models/sort.model';
import { Injectable, Signal, WritableSignal, computed, inject, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilUiService {

  private readonly router = inject(Router);
  private readonly location = inject(Location);

  private sideMenuVisible: WritableSignal<boolean> = signal(false);
  private innerWidth: WritableSignal<number> = signal(window.innerWidth);

  constructor() { }

  public setInnerWidth(innerWidth: number): void {
    this.innerWidth.set(innerWidth);
  }

  public toggleSideMenuVisibility(): void {
    this.sideMenuVisible.update(previous => !previous);
  }

  public goBack(): void {
    if (this.router.navigated) {
      this.location.back();
      return;
    }

    this.router.navigateByUrl('');
  }

  public get isTabletDesktopWidth(): Signal<boolean> {
    return computed(() => this.innerWidth() >= 768);
  }

  public get getSideMenuVisible(): WritableSignal<boolean> {
    return this.sideMenuVisible;
  }

  public static sortByKey<T>(array: T[], config: ISort<T>): T[] {
    const { key, order = 'asc' } = config;

    const compareFunction = (a: T, b: T): number => {
      const isArray = key === 'comments';
      const aValue = isArray ? (a[key] as Array<T> || []).length : a[key];
      const bValue = isArray ? (b[key] as Array<T> || []).length : b[key];

      if (aValue < bValue) { return order === 'asc' ? -1 : 1; }

      if (aValue > bValue) { return order === 'asc' ? 1 : -1; }

      return 0;
    };

    return array.slice().sort(compareFunction);
  }

  public static getColorByIndex(index: number): string {
    const predefinedColors = ['#F49F85', '#AD1FEA', '#62BCFA'];

    if (index < predefinedColors.length) { return predefinedColors[index]; }

    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
