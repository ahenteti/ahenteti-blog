import { Injectable } from "@angular/core";

@Injectable()
export class UserLoginServices {
  preLogin() {
    document.cookie = `url_before_login=${window.location.href}`;
  }
}
