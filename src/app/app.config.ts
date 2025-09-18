import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, isDevMode, inject, provideEnvironmentInitializer } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco, TranslocoService } from '@ngneat/transloco';

function resolveInitialLang(): 'en' | 'de' {
  try {
    const saved = localStorage.getItem('lang') as 'en' | 'de' | null;
    if (saved === 'en' || saved === 'de') return saved;
  } catch { }
  return (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('de')) ? 'de' : 'en';
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['en', 'de'],
        defaultLang: 'de',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader
    }),
    provideEnvironmentInitializer(() => {
      const t = inject(TranslocoService);
      const initial = resolveInitialLang();
      t.setActiveLang(initial);
      document.documentElement.lang = initial;
      if (typeof window !== 'undefined') {
        window.addEventListener('storage', (e) => {
          if (e.key === 'lang' && (e.newValue === 'en' || e.newValue === 'de')) {
            t.setActiveLang(e.newValue as 'en' | 'de');
            document.documentElement.lang = e.newValue!;
          }
        });
      }
    }),
  ]
};