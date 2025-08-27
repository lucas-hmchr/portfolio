import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreakpointService } from './services/breakpoint';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');

  constructor(public bp: BreakpointService){

  }
}
