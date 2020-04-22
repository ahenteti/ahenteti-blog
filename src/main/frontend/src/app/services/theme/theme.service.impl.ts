import * as constants from "../../utils/constants.utils";
import { Injectable } from "@angular/core";
import { IThemeService } from "./theme.service";

@Injectable()
export class ThemeServiceImpl implements IThemeService {
  toggleTheme() {
    const currentTheme = localStorage.getItem(
      constants.LOCAL_STORAGE_WEBSITE_THEME_KEY
    );
    let newWebsiteTheme = constants.LIGHT_THEME;
    if (currentTheme == constants.LIGHT_THEME) {
      newWebsiteTheme = constants.DARK_THEME;
    }
    localStorage.setItem(
      constants.LOCAL_STORAGE_WEBSITE_THEME_KEY,
      newWebsiteTheme
    );
    document.body.classList.remove(constants.LIGHT_THEME, constants.DARK_THEME);
    document.body.classList.add(newWebsiteTheme);
  }
}
