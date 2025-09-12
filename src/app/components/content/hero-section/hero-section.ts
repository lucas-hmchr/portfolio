import { Component } from '@angular/core';
import { BreakpointService } from '../../../services/breakpoint';
import { InViewportDirective } from '../../../directives/in-viewport.directive';


@Component({
  selector: 'app-hero-section',
  imports: [InViewportDirective],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSection {
  isMobile = false;

  constructor(public bp: BreakpointService) {
    
  }
}
