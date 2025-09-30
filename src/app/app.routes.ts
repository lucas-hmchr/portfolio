import { Routes } from '@angular/router';
import { HomeView } from './components/views/home-view/home-view';
import { LegalNotice } from './components/views/legal-notice/legal-notice';
import { PrivacyPolicy } from './components/views/privacy-policy/privacy-policy';

export const routes: Routes = [
    { path: '', component: HomeView },
    { path: 'legal-notice', component: LegalNotice },
    { path: 'privacy-policy', component: PrivacyPolicy },
];
