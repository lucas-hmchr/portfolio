import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  imports: [],
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
