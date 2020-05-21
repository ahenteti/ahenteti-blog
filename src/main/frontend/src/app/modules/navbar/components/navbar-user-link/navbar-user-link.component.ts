import { Component, ViewChild } from "@angular/core";
import { MatMenuTrigger } from "@angular/material/menu";
import { UserAwareComponent } from "src/app/modules/user/components/user-aware.component";
import { ThemeLocalStorageServices } from "src/app/modules/shared/services/theme.localstorage.services";
import { UserLoginServices } from "src/app/modules/user/services/user.login.services";
import { UserObservable } from "src/app/modules/user/services/user.observable";

@Component({
  selector: "app-navbar-user-link",
  templateUrl: "./navbar-user-link.component.html",
  styleUrls: ["./navbar-user-link.component.scss"],
})
export class NavbarUserLinkComponent extends UserAwareComponent {
  @ViewChild("profileDropdownTrigger", { static: false })
  profileDropdownTrigger: MatMenuTrigger;

  constructor(
    private themeService: ThemeLocalStorageServices,
    private userLoginService: UserLoginServices,
    userObservable: UserObservable
  ) {
    super(userObservable);
  }

  handleChangeThemeColorClickEvent(event: any) {
    // event.stopPropagation();
    this.themeService.toggleTheme();
  }

  onMouseOver() {
    this.profileDropdownTrigger.openMenu();
  }
}
