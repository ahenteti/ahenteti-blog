import { Injectable } from "@angular/core";

const LOCAL_STORAGE_WEBSITE_THEME_KEY = "website-theme";
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

@Injectable()
export class ThemeLocalStorage {
  toggleTheme() {
    const currentTheme = localStorage.getItem(LOCAL_STORAGE_WEBSITE_THEME_KEY);
    let newWebsiteTheme = LIGHT_THEME;
    if (currentTheme == LIGHT_THEME) {
      newWebsiteTheme = DARK_THEME;
    }
    localStorage.setItem(LOCAL_STORAGE_WEBSITE_THEME_KEY, newWebsiteTheme);
    document.body.classList.remove(LIGHT_THEME, DARK_THEME);
    document.body.classList.add(newWebsiteTheme);
  }
}
