import { Component, Input, OnDestroy } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
type Item = { text: string; icon?: string };

@Component({
  selector: 'app-typing-rotator',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './typing-rotator.html',
  styleUrl: './typing-rotator.scss'
})
export class TypingRotator implements OnDestroy {
  @Input() items: Item[] = [];
  @Input() typeSpeed = 60;
  @Input() pauseAtEnd = 1200;
  @Input() selectSpeed = 350;

  shown = '';
  index = 0;
  selecting = false;
  sel = '0%';
  private ti?: any;

  get current(): Item | undefined { return this.items?.[this.index % this.items.length]; }

  constructor() { this.loop(); }

  ngOnDestroy() { clearTimeout(this.ti); }

  private loop() {
    if (!this.current) { this.ti = setTimeout(() => this.loop(), 500); return; }

    this.typeText(this.current!.text, () => {
      this.ti = setTimeout(() => {
        this.selecting = true;
        this.sel = '100%';

        this.ti = setTimeout(() => {
          this.shown = '';
          this.sel = '0%';
          this.selecting = false;

          this.index++;
          this.ti = setTimeout(() => this.loop(), 150);
        }, this.selectSpeed);
      }, this.pauseAtEnd);
    });
  }

  private typeText(full: string, done: () => void) {
    let i = 0;
    const step = () => {
      if (i <= full.length) {
        this.shown = full.slice(0, i++);
        this.ti = setTimeout(step, this.typeSpeed);
      } else {
        done();
      }
    };
    step();
  }
}
