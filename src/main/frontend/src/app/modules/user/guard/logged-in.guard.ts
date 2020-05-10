import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { UserObservable } from "../services/user.observable";
import { AlertService } from "../../alert/alert.service";

@Injectable({ providedIn: "root" })
export class LoggedInGuard implements CanActivate {
  constructor(
    private userObservable: UserObservable,
    private alertService: AlertService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isAuthenticated = this.userObservable.currentUser().isAuthenticated;
    if (isAuthenticated !== true) {
      this.alertService.error("Please login to access your page", {
        keepAfterRouteChange: true,
      });
      this.router.navigate(["/"]);
    }
    return isAuthenticated;
  }
}
