import { Component } from '@angular/core';
import { BreakpointService } from '../../../services/breakpoint';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss'
})
export class ContactForm {

  constructor(public bp: BreakpointService){
    
  }
}
