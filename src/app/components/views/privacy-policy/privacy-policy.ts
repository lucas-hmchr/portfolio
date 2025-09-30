import { Component } from '@angular/core';
import { MobileNav } from "../../shared/mobile-nav/mobile-nav";
import { MenuBar } from "../../shared/menu-bar/menu-bar";
import { Footer } from "../../shared/footer/footer";
import { BreakpointService } from '../../../services/breakpoint';
import { PrivacyPolicyContent } from "./privacy-policy-content/privacy-policy-content";

@Component({
  selector: 'app-privacy-policy',
  imports: [MobileNav, MenuBar, Footer, PrivacyPolicyContent],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss'
})
export class PrivacyPolicy {

  constructor(public bp: BreakpointService){

  }
}
