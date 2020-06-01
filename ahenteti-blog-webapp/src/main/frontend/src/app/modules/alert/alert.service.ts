import { Injectable } from "@angular/core";
import { Alert, AlertType } from "./alert.model";
import { Subject, Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class AlertService {
  private subject = new Subject<Alert>();

  onAlert(): Observable<Alert> {
    return this.subject.asObservable();
  }

  alert(alert: Alert) {
    this.subject.next(alert);
  }

  info(message: string, options?: any) {
    this.alert(
      new Alert({
        ...options,
        autoClose: true,
        type: AlertType.INFO,
        icon: "/assets/icon/info.svg",
        message,
      })
    );
  }

  warn(message: string, options?: any) {
    this.alert(
      new Alert({
        ...options,
        type: AlertType.WARN,
        icon: "/assets/icon/warn.svg",
        message,
      })
    );
  }

  error(message: string, options?: any) {
    this.alert(
      new Alert({
        ...options,
        type: AlertType.ERROR,
        icon: "/assets/icon/error.svg",
        message,
      })
    );
  }

  clear() {
    this.subject.next(new Alert());
  }
}
