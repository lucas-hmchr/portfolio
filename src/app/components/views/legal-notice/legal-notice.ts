import { Component } from '@angular/core';
import { MenuBar } from '../../shared/menu-bar/menu-bar';
import { MobileNav } from '../../shared/mobile-nav/mobile-nav';
import { Footer } from '../../shared/footer/footer';
import { BreakpointService } from '../../../services/breakpoint';
import { LegalNoticeContent } from './legal-notice-content/legal-notice-content';

@Component({
  selector: 'app-legal-notice',
  imports: [MenuBar, MobileNav, Footer, LegalNoticeContent],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss'
})
export class LegalNotice {

  constructor(public bp: BreakpointService){

  }
}
