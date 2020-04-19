import { enableProdMode, APP_ID } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

import { Injectable, ReflectiveInjector } from "@angular/core";
import { IThemeService } from "./services/theme/theme.service";

// function createThemeService(): ThemeService {
//   return ReflectiveInjector.resolveAndCreate([ThemeService]).get(ThemeService);
// }

// let themeService: ThemeService = createThemeService();
// themeService.setWebsiteTheme();

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
