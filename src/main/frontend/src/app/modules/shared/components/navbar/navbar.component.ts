import {
  Component,
  HostBinding,
  OnInit,
  ViewChild,
  OnDestroy,
} from "@angular/core";
import { ThemeLocalStorageServices } from "../../services/theme.localstorage.services";
import { UserHttpServices } from "../../services/user.http.services";
import { UserState } from "../../state/user.state";
import { MatMenuTrigger } from "@angular/material/menu";
import { IUser } from "../../models/user.internal.models";
import { UserLoginServices } from "../../services/user.login.services";
import { UserObservableService } from "../../services/user-observable.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavBarComponent implements OnInit, OnDestroy {
  @HostBinding("class.shadow")
  public shadow = false;
  user: IUser;
  userAuthenticated = false;
  private userSubscription: Subscription;

  @ViewChild("profileDropdownTrigger", { static: false })
  profileDropdownTrigger: MatMenuTrigger;

  constructor(
    private themeService: ThemeLocalStorageServices,
    private userHttpService: UserHttpServices,
    private userLoginService: UserLoginServices,
    private userObservableService: UserObservableService
  ) {}

  ngOnInit(): void {
    window.addEventListener("scroll", () => this.handleWindowScrollEvent());
    this.userSubscription = this.userObservableService.currentUser.subscribe(
      (user) => {
        console.log("navbar: " + JSON.stringify(user));
        this.user = user;
        this.userAuthenticated = user != undefined;
      }
    );
    this.userHttpService
      .getUser()
      .then((user) => this.userObservableService.changeUser(user))
      .catch((error) => console.log("user not yet authenticated"));
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  handleChangeThemeColorClickEvent(event: any) {
    // event.stopPropagation();
    this.themeService.toggleTheme();
  }

  onMouseOver() {
    this.profileDropdownTrigger.openMenu();
  }

  preLogin() {
    this.userLoginService.preLogin();
  }

  private handleWindowScrollEvent() {
    this.shadow = window.scrollY > 0;
  }
}
