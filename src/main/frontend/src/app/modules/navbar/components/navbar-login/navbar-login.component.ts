import { Component } from "@angular/core";
import { UserLoginServices } from "src/app/modules/user/services/user.login.services";

@Component({
  selector: "app-navbar-login",
  templateUrl: "./navbar-login.component.html",
  styleUrls: ["./navbar-login.component.scss"],
})
export class NavbarLoginComponent {
  constructor(private userLoginService: UserLoginServices) {}

  preLogin() {
    this.userLoginService.preLogin();
  }
}
