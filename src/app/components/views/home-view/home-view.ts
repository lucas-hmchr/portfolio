import { Component } from '@angular/core';
import { HeroSection } from "../../content/hero-section/hero-section";
import { MobileNav } from "../../shared/mobile-nav/mobile-nav";
import { BreakpointService } from '../../../services/breakpoint';
import { WhyMeSection } from '../../content/why-me-section/why-me-section';
import { SkillSection } from '../../content/skill-section/skill-section';
import { MyProjects } from '../../content/my-projects/my-projects';
import { FeedbackSection } from '../../content/feedback-section/feedback-section';
import { ContactForm } from '../../content/contact-form/contact-form';
import { Footer } from '../../shared/footer/footer';
import { MenuBar } from "../../shared/menu-bar/menu-bar";


@Component({
  selector: 'app-home-view',
  imports: [HeroSection, MobileNav, WhyMeSection, SkillSection, MyProjects, FeedbackSection, ContactForm, Footer, MenuBar],
  templateUrl: './home-view.html',
  styleUrl: './home-view.scss'
})
export class HomeView {

  constructor(public bp: BreakpointService) {
    
  }
}
