import { Component, HostBinding } from "@angular/core";
import { User } from "src/app/modules/user/models/user.internal.models";
import { UserObservable } from "src/app/modules/user/services/user.observable";
import { UserAwareComponent } from "src/app/modules/user/components/user-aware.component";
import { ThemeLocalStorageServices } from "src/app/modules/shared/services/theme.localstorage.services";
import { UserLoginServices } from "src/app/modules/user/services/user.login.services";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent extends UserAwareComponent {
  @HostBinding("class.shadow")
  public shadow = false;
  user: User;

  constructor(
    private themeService: ThemeLocalStorageServices,
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

  private handleWindowScrollEvent() {
    this.shadow = window.scrollY > 0;
  }
}
