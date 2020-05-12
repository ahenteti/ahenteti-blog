import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { UserObservable } from "../services/user.observable";
import { AlertService } from "../../alert/alert.service";
import { UserHttpServices } from "../services/user.http.services";

@Injectable({ providedIn: "root" })
export class LoggedInGuard implements CanActivate {
  constructor(
    private userHttpService: UserHttpServices,
    private alertService: AlertService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userHttpService
      .getUser()
      .then(() => true)
      .catch((error) => {
        console.error("user not yet authenticated. error: " + error);
        this.alertService.error("Please login to access your page", {
          keepAfterRouteChange: true,
        });
        this.router.navigate(["/"]);
        return false;
      });
  }
}
