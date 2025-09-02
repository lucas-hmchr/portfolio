import { Component } from '@angular/core';
import { FeedbackContainer } from './feedback-container/feedback-container';
import type { Feedback } from '../../../interfaces/feedback';
import { BreakpointService } from '../../../services/breakpoint';

@Component({
  selector: 'app-feedback-section',
  imports: [FeedbackContainer],
  templateUrl: './feedback-section.html',
  styleUrl: './feedback-section.scss'
})
export class FeedbackSection {

  feedbacks: Feedback[] = [
    {
      id: 1,
      name: 'Daniel Tran',
      description:
        'Great teamwork on the Join project. You set up a solid structure and made the UI clean and intuitive, which really improved the user experience.',
      project: 'Join',
      linkedin: "https://www.linkedin.com/",
    },
    {
      id: 2,
      name: "Lukas Schmidt",
      description:
        'In the Kanban Board project you impressed with smart solutions. Your drag-and-drop logic and reliable state management helped us meet the deadline.',
      linkedin: "https://www.linkedin.com/",
      project: "Kanban Board"
    },
    {
      id: 3,
      name: "Sophie Becker",
      description:
        'On the Weather Dashboard project, you optimized API integration and boosted performance while making complex topics easy to understand.',
      linkedin: "https://www.linkedin.com/",
      project: "Weather Dashboard"
    }
  ]

  constructor(public bp: BreakpointService) {

  }

}
