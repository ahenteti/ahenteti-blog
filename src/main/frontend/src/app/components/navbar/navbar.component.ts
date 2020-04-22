import { Component, HostBinding, OnInit } from "@angular/core";
import { IThemeService } from "src/app/services/theme/theme.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavBarComponent implements OnInit {
  @HostBinding("class.shadow")
  public shadow = false;

  constructor(private themeService: IThemeService) {}

  ngOnInit(): void {
    window.addEventListener("scroll", () => this.handleWindowScrollEvent());
  }

  private handleWindowScrollEvent() {
    this.shadow = window.scrollY > 0;
  }

  handleChangeThemeColorClickEvent() {
    this.themeService.toggleTheme();
  }
}
