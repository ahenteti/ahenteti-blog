import { Observable, of } from "rxjs";
import { AlertService } from "./alert.service";

export class CommonHttpClient {
  constructor(private alertService: AlertService) {}

  // prettier-ignore
  public handleError(error, defaultErrorMessage = "Error while executing your request :(") {
    console.error(error);
    if (error.status >= 400 || error.status <= 500) {
      this.alertService.error(error.error.error.message);
    } else {
      this.alertService.error(defaultErrorMessage);
    }
  }
}
