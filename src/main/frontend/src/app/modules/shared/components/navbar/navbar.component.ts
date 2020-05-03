import { Component, HostBinding, OnInit } from "@angular/core";
import { ThemeLocalStorageServices } from "../../services/theme.localstorage.services";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavBarComponent implements OnInit {
  @HostBinding("class.shadow")
  public shadow = false;

  constructor(private themeService: ThemeLocalStorageServices) {}

  handleChangeThemeColorClickEvent() {
    this.themeService.toggleTheme();
  }

  ngOnInit(): void {
    window.addEventListener("scroll", () => this.handleWindowScrollEvent());
  }

  private handleWindowScrollEvent() {
    this.shadow = window.scrollY > 0;
  }
}
