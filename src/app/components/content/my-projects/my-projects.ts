import { Component } from '@angular/core';
import { Project } from '../../../interfaces/project';

@Component({
  selector: 'app-my-projects',
  imports: [],
  templateUrl: './my-projects.html',
  styleUrl: './my-projects.scss'
})
export class MyProjects {

  projects: Project[] = [
    {
      name: 'Join',
      about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,',
      organized: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore',
      time: '3 Wochen',
      technologies: [
        'JavaScript',
        'HTML',
        'CSS',
      ],
      img: 'join',
      liveLink: 'https://github.com/lucas-hmchr',
      githubLink: 'https://github.com/lucas-hmchr',
      id: 1,
    },
    {
      name: 'El Pollo Loco',
      about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,',
      organized: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore',
      time: '3 Wochen',
      technologies: [
        'JavaScript',
        'HTML',
        'CSS',
      ],
      img: 'join',
      liveLink: 'https://github.com/lucas-hmchr',
      githubLink: 'https://github.com/lucas-hmchr',
      id: 2,
    },
    {
      name: 'DA Bubble',
      about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,',
      organized: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore',
      time: '3 Wochen',
      technologies: [
        'JavaScript',
        'HTML',
        'CSS',
      ],
      img: 'join',
      liveLink: 'https://github.com/lucas-hmchr',
      githubLink: 'https://github.com/lucas-hmchr',
      id: 3,
    },
    {
      name: 'Ongoing project',
      about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,',
      organized: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore',
      time: '3 Wochen',
      technologies: [
        'JavaScript',
        'HTML',
        'CSS',
      ],
      img: 'join',
      liveLink: 'https://github.com/lucas-hmchr',
      githubLink: 'https://github.com/lucas-hmchr',
      id: 4,
    },
  ]

  selectedProject: number = 1;

  public selectProject(projectId: number) {
    this.selectedProject = projectId;
  }
}
