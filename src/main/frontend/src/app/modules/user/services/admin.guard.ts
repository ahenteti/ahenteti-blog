import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { AlertService } from "../../alert/alert.service";
import { UserHttpClient } from "./user.http-client";

@Injectable({ providedIn: "root" })
export class AdminGuard implements CanActivate {
  constructor(
    private userHttpClient: UserHttpClient,
    private alertService: AlertService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userHttpClient
      .getCurrentUser()
      .then((user) => {
        if (user.isAdmin) return true;
        this.alertService.error("Only Admin user can access this page", {
          keepAfterRouteChange: true,
        });
        this.router.navigate(["/"]);
        return false;
      })
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
