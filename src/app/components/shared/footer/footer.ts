import { Component } from '@angular/core';
import { BreakpointService } from '../../../services/breakpoint';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-footer',
  imports: [TranslocoModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  constructor(public bp: BreakpointService){
    
  }
}
