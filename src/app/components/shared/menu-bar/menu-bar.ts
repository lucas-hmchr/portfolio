import { Component } from '@angular/core';
import { LanguageSwitcher } from '../language-switcher/language-switcher';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [LanguageSwitcher, TranslocoModule],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.scss'
})
export class MenuBar {

}
