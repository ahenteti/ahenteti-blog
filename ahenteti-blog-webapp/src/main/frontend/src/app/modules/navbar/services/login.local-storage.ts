import { Injectable } from "@angular/core";

const LOCAL_STORAGE_LOGIN_FEATURE_ALREADY_HIGHLIGHTED_KEY =
  "login-feature-already-highlighted";

@Injectable()
export class LoginLocalStorage {
  // prettier-ignore
  isLoginFeatureAlreadyHighlighted() {
    if (localStorage.getItem(LOCAL_STORAGE_LOGIN_FEATURE_ALREADY_HIGHLIGHTED_KEY) === null) {
      localStorage.setItem(LOCAL_STORAGE_LOGIN_FEATURE_ALREADY_HIGHLIGHTED_KEY, 'true');
      return false;
    }
    return true;
  }
}
