// in-viewport.directive.ts
import {
  Directive, ElementRef, Input, OnDestroy, AfterViewInit,
  Renderer2, OnChanges, SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[inViewport]',
  standalone: true,
})
export class InViewportDirective implements AfterViewInit, OnDestroy, OnChanges {
  @Input('inViewport') animationClass = 'in-view';
  @Input() delay = 0;                  // ms
  @Input() replayKey?: any;            // <- neu: triggert Replay

  private io?: IntersectionObserver;
  private inView = false;

  constructor(private el: ElementRef<HTMLElement>, private r: Renderer2) {}

  ngAfterViewInit() {
    const node = this.el.nativeElement;
    this.r.addClass(node, 'reveal');
    if (this.delay) node.style.setProperty('--delay', `${this.delay}ms`);

    this.io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target !== node) continue;
          this.inView = entry.isIntersecting;

          if (entry.isIntersecting) {
            if (!node.classList.contains(this.animationClass)) {
              this.r.addClass(node, this.animationClass);
              this.r.removeClass(node, 'reveal');
            }
          }
        }
      },
      { threshold: 0.1 }
    );

    this.io.observe(node);
  }

  ngOnChanges(changes: SimpleChanges) {
    const node = this.el.nativeElement;

    if (changes['delay'] && this.delay !== undefined) {
      node.style.setProperty('--delay', `${this.delay}ms`);
    }
    if (changes['replayKey'] && !changes['replayKey'].firstChange && this.inView) {
      this.restartAnimation();
    }
  }

  private restartAnimation() {
    const node = this.el.nativeElement;
    this.r.removeClass(node, this.animationClass);
    (node as HTMLElement).offsetWidth;
    this.r.addClass(node, this.animationClass);
  }

  ngOnDestroy() {
    this.io?.disconnect();
  }
}
