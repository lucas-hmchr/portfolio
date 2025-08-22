import { Component } from '@angular/core';
import { HeroSection } from "../hero-section/hero-section";
import { MobileNav } from "../mobile-nav/mobile-nav";
import { BreakpointService } from '../services/breakpoint';


@Component({
  selector: 'app-home-view',
  imports: [HeroSection, MobileNav],
  templateUrl: './home-view.html',
  styleUrl: './home-view.scss'
})
export class HomeView {

  constructor(public bp: BreakpointService) {
    
  }
}
