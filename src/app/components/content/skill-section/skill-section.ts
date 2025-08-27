import { Component } from '@angular/core';

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
  ]
}
