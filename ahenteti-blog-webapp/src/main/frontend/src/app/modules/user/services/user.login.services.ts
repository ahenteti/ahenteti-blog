import { Injectable } from "@angular/core";
import { CookieUtils } from "../../shared/services/cookie.utils";
import { URL_BEFORE_LOGIN_COOKIE_NAME } from "../../shared/services/constants.utils";

@Injectable()
export class UserLoginServices {
  preLogin() {
    CookieUtils.eraseCookie(URL_BEFORE_LOGIN_COOKIE_NAME);
    CookieUtils.createCookie(
      URL_BEFORE_LOGIN_COOKIE_NAME,
      window.location.href
    );
  }
}
