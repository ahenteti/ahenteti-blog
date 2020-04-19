import { Component } from "@angular/core";
import { IThemeService } from "src/services/theme/theme.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavBarComponent {
  constructor(private themeService: IThemeService) {}

  handleChangeThemeColorClickEvent() {
    this.themeService.toggleTheme();
  }
}
