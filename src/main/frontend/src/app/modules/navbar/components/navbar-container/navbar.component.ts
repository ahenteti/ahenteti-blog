import { Component, HostBinding } from "@angular/core";
import { UserObservable } from "src/app/modules/user/services/user.observable";
import { UserAwareComponent } from "src/app/modules/user/components/user-aware.component";
import { ThemeLocalStorageServices } from "src/app/modules/shared/services/theme.localstorage.services";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent extends UserAwareComponent {
  @HostBinding("class.shadow")
  public shadow = false;

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
