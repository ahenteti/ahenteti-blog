import { Component, Input } from "@angular/core";
import { UserLoginServices } from "../../../user/services/user.login.services";

@Component({
  selector: "app-login-with-github",
  templateUrl: "./login-with-github.component.html",
  styleUrls: ["./login-with-github.component.scss"],
})
export class LoginWithGithubComponent {
  @Input() suffix: string;

  constructor(private userLoginServices: UserLoginServices) {}

  preLogin() {
    this.userLoginServices.preLogin();
  }
}
