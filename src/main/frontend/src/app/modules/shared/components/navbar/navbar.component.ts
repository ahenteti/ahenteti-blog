import { Component, HostBinding, OnInit, ViewChild } from "@angular/core";
import { ThemeLocalStorageServices } from "../../services/theme.localstorage.services";
import { UserHttpServices } from "../../services/user.http.services";
import { UserState } from "../../state/user.state";
import { MatMenuTrigger } from "@angular/material/menu";
import {
  WINDOW_LOCATION_BEFORE_LOGIN,
  IS_BEFORE_RELOAD_USER_WAS_ALREADY_LOGGED_IN,
} from "../../utils/constants.utils";
import { IUser } from "../../models/user.internal.models";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavBarComponent implements OnInit {
  @HostBinding("class.shadow")
  public shadow = false;

  @ViewChild("profileDropdownTrigger", { static: false })
  profileDropdownTrigger: MatMenuTrigger;

  constructor(
    private themeService: ThemeLocalStorageServices,
    private userHttpService: UserHttpServices,
    public userState: UserState
  ) {}

  handleChangeThemeColorClickEvent(event: any) {
    // event.stopPropagation();
    this.themeService.toggleTheme();
  }

  onMouseOver() {
    this.profileDropdownTrigger.openMenu();
  }

  ngOnInit(): void {
    window.addEventListener("scroll", () => this.handleWindowScrollEvent());
    this.userHttpService
      .getUser()
      .then((user) => this.onGetUserSuccess(user))
      .catch((error) => console.log("user not yet authenticated"));
  }

  preLogin() {
    this.storeWindowPropertiesBeforeLogin();
  }

  onGetUserSuccess(user: IUser) {
    this.userState.user = user;
    this.restoreWindowPropertiesAfterLogin();
  }

  private storeWindowPropertiesBeforeLogin() {
    localStorage.setItem(WINDOW_LOCATION_BEFORE_LOGIN, window.location.href);
    localStorage.setItem(IS_BEFORE_RELOAD_USER_WAS_ALREADY_LOGGED_IN, "false");
  }

  private restoreWindowPropertiesAfterLogin() {
    if (
      localStorage.getItem(IS_BEFORE_RELOAD_USER_WAS_ALREADY_LOGGED_IN) ==
        "false" &&
      localStorage.getItem(WINDOW_LOCATION_BEFORE_LOGIN)
    ) {
      window.location.href = localStorage.getItem(WINDOW_LOCATION_BEFORE_LOGIN);
    }
    localStorage.setItem(IS_BEFORE_RELOAD_USER_WAS_ALREADY_LOGGED_IN, "true");
  }

  private handleWindowScrollEvent() {
    this.shadow = window.scrollY > 0;
  }
}
