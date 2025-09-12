import { Component } from '@angular/core';
import { TypingRotator } from './typing-rotator/typing-rotator';

@Component({
  selector: 'app-why-me-section',
  imports: [TypingRotator],
  templateUrl: './why-me-section.html',
  styleUrl: './why-me-section.scss'
})
export class WhyMeSection {
  whyMeItems = [
    { text: 'located in Hostel, Germany.', icon: '/images/why_me_section/location_icon.svg' },
    { text: 'available for remote work.',  icon: '/images/why_me_section/remote_icon.svg' },
    { text: 'prepared to relocate.',  icon: '/images/why_me_section/luggage_icon.svg' },
  ];
}
