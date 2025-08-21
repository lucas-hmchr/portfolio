import { Component } from '@angular/core';
import { HeroSection } from "../hero-section/hero-section";

@Component({
  selector: 'app-home-view',
  imports: [HeroSection],
  templateUrl: './home-view.html',
  styleUrl: './home-view.scss'
})
export class HomeView {

}
