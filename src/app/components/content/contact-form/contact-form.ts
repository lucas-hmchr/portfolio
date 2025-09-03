import { Component } from '@angular/core';
import { BreakpointService } from '../../../services/breakpoint';

@Component({
  selector: 'app-contact-form',
  imports: [],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss'
})
export class ContactForm {

  constructor(public bp: BreakpointService){
    
  }
}
