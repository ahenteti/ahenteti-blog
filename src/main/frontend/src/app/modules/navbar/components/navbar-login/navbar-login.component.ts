import { Component, ViewChild, OnInit } from "@angular/core";
import { UserLoginServices } from "src/app/modules/user/services/user.login.services";
import { MatMenuTrigger } from "@angular/material/menu";
import { LoginLocalStorage } from "../../services/login.local-storage";

@Component({
  selector: "app-navbar-login",
  templateUrl: "./navbar-login.component.html",
  styleUrls: ["./navbar-login.component.scss"],
})
export class NavbarLoginComponent implements OnInit {
  @ViewChild("dropdownTrigger", { static: false })
  dropdownTrigger: MatMenuTrigger;
  loginFeatureAlreadyHighlighted = false;

  constructor(
    private userLoginService: UserLoginServices,
    private loginLocalStorage: LoginLocalStorage
  ) {}

  ngOnInit(): void {
    this.loginFeatureAlreadyHighlighted = this.loginLocalStorage.isLoginFeatureAlreadyHighlighted();
    document.addEventListener("click", () => {
      this.loginFeatureAlreadyHighlighted = true;
    });
  }

  preLogin() {
    this.userLoginService.preLogin();
  }
}
