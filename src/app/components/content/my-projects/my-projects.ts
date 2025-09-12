import { Component } from '@angular/core';
import { Project } from '../../../interfaces/project';
import { Description } from '../../../interfaces/project';
import { BreakpointService } from '../../../services/breakpoint';
import { InViewportDirective } from '../../../directives/in-viewport.directive';

@Component({
  selector: 'app-my-projects',
  imports: [InViewportDirective],
  templateUrl: './my-projects.html',
  styleUrl: './my-projects.scss'
})
export class MyProjects {

  projects: Project[] = [
    {
      name: 'Join',
      time: '3 Wochen',
      technologies: [
        'JavaScript',
        'HTML',
        'CSS',
      ],
      descriptions: [
        {
          title: 'About the project',
          text: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization'
        },
        {
          title: 'How i have organized the process',
          text: 'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.'
        },
        {
          title: 'My group work experience',
          text: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality.What technologies did you use? It is nice to mention good teamwork and cooperation.'
        },
      ],
      img: 'el_pollo_loco.png',
      liveLink: 'https://github.com/lucas-hmchr',
      githubLink: 'https://github.com/lucas-hmchr',
      id: 1,
    },
    {
      name: 'El Pollo Loco',
      time: '3 Wochen',
      technologies: [
        'JavaScript',
        'HTML',
        'CSS',
      ],
      descriptions: [
        {
          title: 'About the project',
          text: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization'
        },
        {
          title: 'How i have organized the process',
          text: 'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.'
        },
        {
          title: 'My group work experience',
          text: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality.What technologies did you use? It is nice to mention good teamwork and cooperation.'
        },
      ],
      img: 'el_pollo_loco.png',
      liveLink: 'https://github.com/lucas-hmchr',
      githubLink: 'https://github.com/lucas-hmchr',
      id: 2,
    },
    {
      name: 'Lorem',
      time: '3 Wochen',
      technologies: [
        'JavaScript',
        'HTML',
        'CSS',
      ],
      descriptions: [
        {
          title: 'About the project',
          text: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization'
        },
        {
          title: 'How i have organized the process',
          text: 'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.'
        },
        {
          title: 'My group work experience',
          text: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality.What technologies did you use? It is nice to mention good teamwork and cooperation.'
        },
      ],
      img: 'el_pollo_loco.png',
      liveLink: 'https://github.com/lucas-hmchr',
      githubLink: 'https://github.com/lucas-hmchr',
      id: 3,
    },
    {
      name: 'Ongoing Project',
      time: '3 Wochen',
      technologies: [
        'JavaScript',
        'HTML',
        'CSS',
      ],
      descriptions: [
        {
          title: 'About the project',
          text: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization'
        },
        {
          title: 'How i have organized the process',
          text: 'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.'
        },
        {
          title: 'My group work experience',
          text: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality.What technologies did you use? It is nice to mention good teamwork and cooperation.'
        },
      ],
      img: 'el_pollo_loco.png',
      liveLink: 'https://github.com/lucas-hmchr',
      githubLink: 'https://github.com/lucas-hmchr',
      id: 4,
    },

  ]

  selectedProject: Project = this.projects[0];

  constructor(public bp: BreakpointService) {

  }

  public selectProject(project: Project) {
    this.selectedProject = project;
  }
}
