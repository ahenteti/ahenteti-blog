import { Component, HostBinding, OnInit, ViewChild } from "@angular/core";
import { ThemeLocalStorageServices } from "../../services/theme.localstorage.services";
import { UserHttpServices } from "../../services/user.http.services";
import { UserState } from "../../state/user.state";
import { MatMenuTrigger } from "@angular/material/menu";

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
      .then((user) => (this.userState.user = user))
      .catch((error) => console.log("user not yet authenticated"));
  }

  private handleWindowScrollEvent() {
    this.shadow = window.scrollY > 0;
  }
}
