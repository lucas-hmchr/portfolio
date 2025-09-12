import { Component } from '@angular/core';
import { BreakpointService } from '../../../services/breakpoint';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
@Component({
  selector: 'app-footer',
  imports: [TranslocoModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  constructor(public bp: BreakpointService){
    
  }
}
