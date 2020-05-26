import { Observable, of } from "rxjs";
import { AlertService } from "./alert.service";

export class CommonHttpClient {
  constructor(private alertService: AlertService) {}

  protected handleError<T>(message, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.alertService.error(message);
      return of(result);
    };
  }
}
