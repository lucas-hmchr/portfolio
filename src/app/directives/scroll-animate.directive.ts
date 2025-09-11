import {
  AfterViewInit, Directive, ElementRef, Renderer2,
  Input, Output, EventEmitter, OnDestroy, NgZone
} from '@angular/core';

export interface ScrollAnimateOptions {
  animateCss?: string | string[];  // Klassen beim Sichtbarwerden
  hiddenClass?: string | string[]; // Startzustand (z. B. opacity-0 ...)
  threshold?: number | number[];   // 0..1 oder Array
  rootMargin?: string;             // z. B. '0px 0px -10% 0px'
  once?: boolean;                  // nur einmal abspielen?
  respectReducedMotion?: boolean;  // default: true
}

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true,
  exportAs: 'appScrollAnimate',
})
export class ScrollAnimateDirective implements AfterViewInit, OnDestroy {
  @Input('appScrollAnimate') options: ScrollAnimateOptions = {};
  @Output() visibleChange = new EventEmitter<boolean>();

  private isVisible = false;
  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private zone: NgZone
  ) { }

  ngAfterViewInit() {
    const {
      animateCss = '',
      hiddenClass,
      threshold = 0.25,
      rootMargin,
      once = true,
      respectReducedMotion = true,
    } = this.options;

    // Startzustand
    this.addClasses(hiddenClass);

    const prefersReduced =
      respectReducedMotion &&
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    // Reduced motion: sofort Endzustand
    if (prefersReduced) {
      this.removeClasses(hiddenClass);
      this.addClasses(animateCss);
      this.isVisible = true;
      this.visibleChange.emit(true);
      return;
    }

    // Fallback: wenn IntersectionObserver nicht verfügbar
    if (typeof IntersectionObserver === 'undefined') {
      this.removeClasses(hiddenClass);
      this.addClasses(animateCss);
      this.isVisible = true;
      this.visibleChange.emit(true);
      return;
    }

    // Observer
    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const inView = entry.isIntersecting && entry.intersectionRatio > 0;
        if (inView && !this.isVisible) {
          this.isVisible = true;
          this.removeClasses(hiddenClass);
          this.addClasses(animateCss);
          // Sicher für OnPush:
          this.zone.run(() => this.visibleChange.emit(true));
          if (once) this.disconnect();
        } else if (!inView && this.isVisible && !once) {
          this.isVisible = false;
          this.removeClasses(animateCss);
          this.addClasses(hiddenClass);
          this.zone.run(() => this.visibleChange.emit(false));
        }
      }
    }, { threshold, rootMargin });
    console.log('[ScrollAnimate] init', { threshold, rootMargin, once });
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() { this.disconnect(); }

  private disconnect() {
    this.observer?.disconnect();
    this.observer = undefined;
  }

  private addClasses(cls?: string | string[]) {
    if (!cls) return;
    (Array.isArray(cls) ? cls : cls.split(/\s+/).filter(Boolean))
      .forEach(c => this.renderer.addClass(this.el.nativeElement, c));
  }
  private removeClasses(cls?: string | string[]) {
    if (!cls) return;
    (Array.isArray(cls) ? cls : cls.split(/\s+/).filter(Boolean))
      .forEach(c => this.renderer.removeClass(this.el.nativeElement, c));
  }
}
