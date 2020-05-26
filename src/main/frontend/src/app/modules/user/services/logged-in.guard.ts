import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { UserObservable } from "./user.observable";
import { AlertService } from "../../alert/alert.service";
import { UserHttpClient } from "./user.http-client";

@Injectable({ providedIn: "root" })
export class LoggedInGuard implements CanActivate {
  constructor(
    private userHttpClient: UserHttpClient,
    private alertService: AlertService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userHttpClient
      .getCurrentUser()
      .then(() => true)
      .catch((error) => {
        console.error("user not yet authenticated. error: " + error);
        this.alertService.error("Please login to access this page", {
          keepAfterRouteChange: true,
        });
        this.router.navigate(["/"]);
        return false;
      });
  }
}
