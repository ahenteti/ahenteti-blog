import { Component, ViewChild } from "@angular/core";
import { UserLoginServices } from "src/app/modules/user/services/user.login.services";
import { MatMenuTrigger } from "@angular/material/menu";

@Component({
  selector: "app-navbar-login",
  templateUrl: "./navbar-login.component.html",
  styleUrls: ["./navbar-login.component.scss"],
})
export class NavbarLoginComponent {
  @ViewChild("dropdownTrigger", { static: false })
  dropdownTrigger: MatMenuTrigger;

  constructor(private userLoginService: UserLoginServices) {}

  preLogin() {
    this.userLoginService.preLogin();
  }

  onMouseOver() {
    this.dropdownTrigger.openMenu();
  }
}
