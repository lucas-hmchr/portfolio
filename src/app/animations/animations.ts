import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
  state('hidden', style({ opacity: 0, transform: 'translateY(16px)' })),
  state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
  transition('hidden => visible', animate('500ms 100ms ease-out')),
]);
