import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  private breakpoints = { xxs: 360, xs: 480, sm: 600, md: 768, lg: 992, xl: 1200, xxl: 1440 };
  width = signal<number>(window.innerWidth);
  device = signal<'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>('lg');

  constructor() {
    this.update(window.innerWidth);
    window.addEventListener('resize', () => this.update(window.innerWidth));
  }

  private update(width: number) {
    this.width.set(width);
    if (width <= this.breakpoints.xs) this.device.set('xxs');
    else if (width <= this.breakpoints.sm) this.device.set('xs');
    else if (width <= this.breakpoints.sm) this.device.set('sm');
    else if (width <= this.breakpoints.md) this.device.set('md');
    else if (width <= this.breakpoints.lg) this.device.set('lg');
    else if (width <= this.breakpoints.xl) this.device.set('xl');
    else this.device.set('xxl');
  }
}
