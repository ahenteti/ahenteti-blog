import { Component, HostBinding, ViewChild } from "@angular/core";
import { ThemeLocalStorageServices } from "../shared/services/theme.localstorage.services";
import { MatMenuTrigger } from "@angular/material/menu";
import { UserLoginServices } from "../user/services/user.login.services";
import { User } from "src/app/modules/user/models/user.internal.models";
import { UserObservable } from "src/app/modules/user/services/user.observable";
import { UserAwareComponent } from "src/app/modules/user/components/user-aware.component";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent extends UserAwareComponent {
  @HostBinding("class.shadow")
  public shadow = false;
  user: User;

  @ViewChild("profileDropdownTrigger", { static: false })
  profileDropdownTrigger: MatMenuTrigger;

  constructor(
    private themeService: ThemeLocalStorageServices,
    private userLoginService: UserLoginServices,
    userObservable: UserObservable
  ) {
    super(userObservable);
  }

  ngOnInit(): void {
    super.ngOnInit();
    window.addEventListener("scroll", () => this.handleWindowScrollEvent());
  }

  handleChangeThemeColorClickEvent(event: any) {
    // event.stopPropagation();
    this.themeService.toggleTheme();
  }

  onMouseOver() {
    this.profileDropdownTrigger.openMenu();
  }

  preLogin() {
    this.userLoginService.preLogin();
  }

  private handleWindowScrollEvent() {
    this.shadow = window.scrollY > 0;
  }
}
