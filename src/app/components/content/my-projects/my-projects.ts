import { Component, computed, effect, inject } from '@angular/core';
import { Project } from '../../../interfaces/project';
import { BreakpointService } from '../../../services/breakpoint';
import { InViewportDirective } from '../../../directives/in-viewport.directive';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { toSignal } from '@angular/core/rxjs-interop';

type ProjectI18nKey = 'join' | 'el-pollo-loco' | 'hostel' | 'ongoing';

@Component({
  selector: 'app-my-projects',
  imports: [InViewportDirective, TranslocoModule],
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
        'Firebase'
      ],
      descriptions: [ ],
      img: 'join.png',
      liveLink: 'https://join.lucashamacher.de',
      githubLink: 'https://github.com/lucas-hmchr/Join',
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
      descriptions: [ ],
      img: 'el_pollo_loco.png',
      liveLink: 'https://el-pollo-loco.lucashamacher.de',
      githubLink: 'https://github.com/lucas-hmchr/El-Pollo-Loco',
      id: 2,
    },
    {
      name: 'Hostel',
      time: '3 Wochen',
      technologies: [
        'Wordpress',
        'HTML',
        'CSS',
      ],
      descriptions: [ ],
      img: 'hostel.jpg',
      liveLink: 'https://hostel-eifel.com/',
      githubLink: null,
      id: 3,
    },
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
