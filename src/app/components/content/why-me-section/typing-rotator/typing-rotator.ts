import { Component, Input, OnDestroy } from '@angular/core';

type Item = { text: string; icon?: string };

@Component({
  selector: 'app-typing-rotator',
  standalone: true,
  imports: [],
  templateUrl: './typing-rotator.html',
  styleUrl: './typing-rotator.scss'
})
export class TypingRotator implements OnDestroy {
  @Input() items: Item[] = [];
  @Input() typeSpeed = 60;       // ms pro Zeichen
  @Input() pauseAtEnd = 1200;    // ms warten nach fertig getippt
  @Input() selectSpeed = 350;    // ms für die "Markieren"-Animation

  shown = '';
  index = 0;
  selecting = false;
  sel = '0%';                    // CSS-Var für Hintergrundbreite
  private ti?: any;

  get current(): Item | undefined { return this.items?.[this.index % this.items.length]; }

  constructor() { this.loop(); }

  ngOnDestroy() { clearTimeout(this.ti); }

  private loop() {
    if (!this.current) { this.ti = setTimeout(() => this.loop(), 500); return; }

    // 1) Tippen
    this.typeText(this.current!.text, () => {
      // 2) Pause mit komplettem Text
      this.ti = setTimeout(() => {
        // 3) Markieren (Selection-Overlay ausfahren)
        this.selecting = true;
        this.sel = '100%';

        this.ti = setTimeout(() => {
          // 4) Löschen & zurücksetzen
          this.shown = '';
          this.sel = '0%';
          this.selecting = false;

          // 5) Nächster Satz
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
