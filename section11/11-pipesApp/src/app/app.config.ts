import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

import localeEsEs from "@angular/common/locales/es";
import localeFrCa from "@angular/common/locales/fr-CA";
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsEs);
registerLocaleData(localeFrCa);


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    { provide: LOCALE_ID, useValue: 'es-ES' }
  ]
};
