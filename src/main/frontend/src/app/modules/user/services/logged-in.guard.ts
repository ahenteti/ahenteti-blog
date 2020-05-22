import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { UserObservable } from "./user.observable";
import { AlertService } from "../../alert/alert.service";
import { UserHttpServices } from "./user.http.services";

@Injectable({ providedIn: "root" })
export class LoggedInGuard implements CanActivate {
  constructor(
    private userHttpService: UserHttpServices,
    private alertService: AlertService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userHttpService
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
