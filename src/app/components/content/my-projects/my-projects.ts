import { Component, computed, effect, inject } from '@angular/core';
import { Project } from '../../../interfaces/project';
import { Description } from '../../../interfaces/project';
import { BreakpointService } from '../../../services/breakpoint';
import { InViewportDirective } from '../../../directives/in-viewport.directive';
import { TranslocoService } from '@ngneat/transloco';
import { toSignal } from '@angular/core/rxjs-interop';

type ProjectI18nKey = 'join' | 'el-pollo-loco' | 'hostel' | 'ongoing';

@Component({
  selector: 'app-my-projects',
  imports: [InViewportDirective],
  templateUrl: './my-projects.html',
  styleUrl: './my-projects.scss'
})
export class MyProjects {
  readonly staticProjects: Project[] = [
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
    }
  ]

  selectedProject: Project = this.staticProjects[0];

  constructor(public bp: BreakpointService) {

  }
  private readonly projectI18nKeyById: Record<number, ProjectI18nKey> = {
    1: 'join',
    2: 'el-pollo-loco',
    3: 'hostel',
    4: 'ongoing'
  };

  private readonly transloco = inject(TranslocoService);
  private readonly projectSectionTranslations = toSignal(
    this.transloco.selectTranslateObject('projectSection'),
    { initialValue: {} as any }
  );

  public projectsView: Project[] = structuredClone(this.staticProjects);

  public activeProject: Project = this.projectsView[0];

  private readonly mergeTranslationsEffect = effect(() => {
    const tr = this.projectSectionTranslations();

    this.projectsView = this.staticProjects.map((p) => {
      const key = this.projectI18nKeyById[p.id];
      const trProject = tr?.[key] ?? {};
      const trDescriptions: Array<{ title?: string; text?: string }> =
        trProject.descriptions ?? [];

      const mergedDescriptions =
        trDescriptions.length > 0
          ? trDescriptions.map(d => ({ title: d.title ?? '', text: d.text ?? '' }))
          : p.descriptions;

      const name = trProject.name ?? p.name;
      const time = trProject.time ?? p.time;
      return { ...p, name, time, descriptions: mergedDescriptions };

    });

    const currentId = this.activeProject?.id ?? this.projectsView[0].id;
    this.activeProject =
      this.projectsView.find(x => x.id === currentId) ?? this.projectsView[0];
  });

  public setActiveProject(project: Project) {
    this.activeProject = project;
  }
}
