import { Component, effect, inject } from '@angular/core';
import { FeedbackContainer } from './feedback-container/feedback-container';
import type { Feedback } from '../../../interfaces/feedback';
import { BreakpointService } from '../../../services/breakpoint';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { toSignal } from '@angular/core/rxjs-interop';

type FeedbackI18nKey = 'Daniel Tran' | 'Thomas Pötsch' | 'Jannis Müller';
const FEEDBACK_I18N_KEY_BY_ID: Record<number, FeedbackI18nKey> = {
  1: 'Daniel Tran',
  2: 'Thomas Pötsch',
  3: 'Jannis Müller',
};

@Component({
  selector: 'app-feedback-section',
  standalone: true,
  imports: [FeedbackContainer, TranslocoModule],
  templateUrl: './feedback-section.html',
  styleUrl: './feedback-section.scss'
})
export class FeedbackSection {
  constructor(public bp: BreakpointService) { }
  private readonly staticFeedbacks: Feedback[] = [
    {
      id: 1,
      name: 'Daniel Tran',
      description:
        'Great teamwork on the Join project. You set up a solid structure and made the UI clean and intuitive, which really improved the user experience.',
      project: 'Join',
      linkedin: 'https://www.linkedin.com/',
    },
    {
      id: 2,
      name: 'Thomas Pötsch',
      description:
        'In the Join project you impressed with smart solutions. Your drag-and-drop logic and reliable state management helped us meet the deadline.',
      linkedin: 'https://www.linkedin.com/',
      project: 'Join'
    },
    {
      id: 3,
      name: 'Jannis Müller',
      description:
        "The concept and design that Lucas has created for the hostel website is well thought out and very fitting. As a volunteer, it couldn't be easier for me to get involved in maintaining it.",
      linkedin: 'https://www.linkedin.com/',
      project: 'Hostel'
    }
  ];
  public feedbacks: Feedback[] = structuredClone(this.staticFeedbacks);
  public sectionTitle = 'Need a teamplayer?';
  public subtitle = 'Here is what my colleagues say about me';
  public profileLabel = 'Profile';
  public projectLabel = 'Project';

  private readonly transloco = inject(TranslocoService);
  private readonly feedbackSectionTranslations = toSignal(
    this.transloco.selectTranslateObject('feedbackSection'),
    { initialValue: {} as any }
  );
  private readonly mergeTranslationsEffect = effect(() => {
    const tr = this.feedbackSectionTranslations();

    this.sectionTitle = tr?.title ?? this.sectionTitle ?? '';
    this.profileLabel = tr?.profileLabel ?? 'Profile';
    this.projectLabel = tr?.projectLabel ?? 'Project';
    this.subtitle = tr?.subtitle ?? 'Here is what my colleagues say about me.';

 this.feedbacks = this.staticFeedbacks.map(fb => {
      const key = FEEDBACK_I18N_KEY_BY_ID[fb.id];
      const localized = tr?.[key];
      return {
        ...fb,
        description: localized?.description ?? fb.description,
      };
    });
  });
}