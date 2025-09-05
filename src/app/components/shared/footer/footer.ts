import { Component } from '@angular/core';
import { BreakpointService } from '../../../services/breakpoint';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  constructor(public bp: BreakpointService){
    
  }
}
