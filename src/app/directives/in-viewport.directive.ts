import { Directive, ElementRef, Input, OnDestroy, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[inViewport]',
  standalone: true,
})
export class InViewportDirective implements AfterViewInit, OnDestroy {
  @Input('inViewport') animationClass = 'in-view';
  @Input() delay = 0;

  private io?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>, private r: Renderer2) {}

  ngAfterViewInit() {
    const node = this.el.nativeElement;

    this.r.addClass(node, 'reveal');
    if (this.delay) node.style.setProperty('--delay', `${this.delay}ms`);

    this.io = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.r.addClass(node, this.animationClass);
            this.r.removeClass(node, 'reveal');
            this.io?.unobserve(node);
          }
        }
      },
      { threshold: 0.1 }
    );

    this.io.observe(node);
  }

  ngOnDestroy() {
    this.io?.disconnect();
  }
}
