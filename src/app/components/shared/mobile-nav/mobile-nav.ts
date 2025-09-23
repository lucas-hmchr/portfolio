import { Component } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { LanguageSwitcher } from '../language-switcher/language-switcher';
@Component({
  selector: 'app-mobile-nav',
  imports: [TranslocoModule, LanguageSwitcher],
  templateUrl: './mobile-nav.html',
  styleUrl: './mobile-nav.scss'
})
export class MobileNav {
  showNavMenu: boolean = false;

  toggleNavMenu() {
    const body = document.querySelector('body');
    this.showNavMenu = !this.showNavMenu;
    this.showNavMenu ? body?.classList.add('no-scroll') : body?.classList.remove('no-scroll');
  }
}
