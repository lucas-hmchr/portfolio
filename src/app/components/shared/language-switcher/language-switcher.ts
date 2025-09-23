import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss'
})
export class LanguageSwitcher {
  constructor() { }
  private t = inject(TranslocoService);

  activeLang = toSignal(this.t.langChanges$, { initialValue: this.t.getActiveLang() });

  set(lang: 'en' | 'de') {
    this.t.setActiveLang(lang);
    try {
      localStorage.setItem('lang', lang);
    } catch { }
    document.documentElement.lang = lang;
  }

  isActive(lang: 'en' | 'de') {
    return this.activeLang() === lang;
  }
}
