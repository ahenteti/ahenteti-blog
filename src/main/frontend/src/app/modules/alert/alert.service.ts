import { Injectable } from "@angular/core";
import { Alert, AlertType } from "./alert.model";
import { Subject, Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class AlertService {
  private subject = new Subject<Alert>();

  onAlert(): Observable<Alert> {
    return this.subject.asObservable();
  }

  alter(alert: Alert) {
    this.subject.next(alert);
  }

  info(message: string, options?: any) {
    this.alter(new Alert({ ...options, type: AlertType.INFO, message }));
  }

  warn(message: string, options?: any) {
    this.alter(new Alert({ ...options, type: AlertType.WARN, message }));
  }

  error(message: string, options?: any) {
    this.alter(new Alert({ ...options, type: AlertType.ERROR, message }));
  }

  clear() {
    this.subject.next(new Alert());
  }
}
