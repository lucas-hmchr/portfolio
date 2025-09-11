import { Component } from '@angular/core';
import { BreakpointService } from '../../../services/breakpoint';
import { ScrollAnimateDirective } from './../../../directives/scroll-animate.directive';

@Component({
  selector: 'app-skill-section',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './skill-section.html',
  styleUrl: './skill-section.scss',
})
export class SkillSection {
  icons: string[] = [
    'Angular',
    'Vue',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'REST-API',
    'Firebase',
    'Git',
    'Material Design',
    'Scrum',
    'Wordpress',
  ]

  learningStack: string[] = [
    'Angular',
    'Vue',
  ]

  inView = false;

  constructor(public bp: BreakpointService) {

  }
}
