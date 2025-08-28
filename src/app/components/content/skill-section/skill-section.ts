import { Component } from '@angular/core';
import { BreakpointService } from '../../../services/breakpoint';

@Component({
  selector: 'app-skill-section',
  imports: [],
  templateUrl: './skill-section.html',
  styleUrl: './skill-section.scss'
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

  constructor(public bp: BreakpointService) {

  }
}
