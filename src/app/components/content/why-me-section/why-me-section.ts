import { Component, computed, inject } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { toSignal } from '@angular/core/rxjs-interop';
import { TypingRotator } from './typing-rotator/typing-rotator';

@Component({
  selector: 'app-why-me-section',
  standalone: true,
  imports: [TranslocoModule, TypingRotator],
  templateUrl: './why-me-section.html',
  styleUrl: './why-me-section.scss'
})
export class WhyMeSection {
  private t = inject(TranslocoService);

  private tr = toSignal(
    this.t.selectTranslateObject('typingRotator'),
    { initialValue: { located: '', remote: '', relocate: '' } }
  );

  readonly whyMeItems = computed(() => {
    const o = this.tr();
    return [
      { text: o.located,  icon: '/images/why_me_section/location_icon.svg' },
      { text: o.remote,   icon: '/images/why_me_section/remote_icon.svg' },
      { text: o.relocate, icon: '/images/why_me_section/luggage_icon.svg' },
    ];
  });
}
