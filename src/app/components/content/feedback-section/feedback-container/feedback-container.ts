import { Component, Input } from '@angular/core';
import { Feedback } from '../../../../interfaces/feedback';

@Component({
  selector: 'app-feedback-container',
  imports: [],
  templateUrl: './feedback-container.html',
  styleUrl: './feedback-container.scss'
})
export class FeedbackContainer {

  @Input() feedback: Feedback | null = null
}
