import { Component } from '@angular/core';
import { MenuBar } from "../menu-bar/menu-bar";
import { BreakpointService } from '../services/breakpoint';

@Component({
  selector: 'app-hero-section',
  imports: [MenuBar],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSection {
  isMobile = false;

  constructor(public bp: BreakpointService) {
    
  }
}
