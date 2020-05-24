import { Component, OnInit, OnDestroy, ElementRef } from "@angular/core";
import { Alerts, Alert, AlertType } from "./alert.model";
import { Router, NavigationStart } from "@angular/router";
import { AlertService } from "./alert.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-alert",
  templateUrl: "alert.component.html",
  styleUrls: ["alert.component.scss"],
})
export class AlertComponent implements OnInit, OnDestroy {
  public alerts: Alerts = new Alerts();
  private alertSubscription: Subscription;
  private routeSubscription: Subscription;

  constructor(private router: Router, private alertService: AlertService) {}

  ngOnInit() {
    this.alertSubscription = this.alertService.onAlert().subscribe((alert) => {
      // clear alerts when an empty alert is received
      if (!alert.message) {
        // filter out alerts without 'keepAfterRouteChange' flag
        this.alerts = this.alerts.filter((x) => x.keepAfterRouteChange);
        // remove 'keepAfterRouteChange' flag on the rest
        this.alerts.forEach((a) => delete a.keepAfterRouteChange);
        return;
      }

      this.alerts.push(alert);

      if (alert.autoClose) {
        setTimeout(() => this.removeAlert(alert), alert.autoCloseDuration);
      }
    });

    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.alertService.clear();
      }
    });
  }

  ngOnDestroy(): void {
    // unsubscribe to avoid memory leaks
    this.alertSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  removeAlert(alert: Alert, event?) {
    if (event) event.stopPropagation();
    this.alerts.find((x) => x === alert).fadeout = true;
    setTimeout(() => {
      this.alerts = this.alerts.filter((x) => x !== alert);
    }, 200);
  }

  cssClasses(alert: Alert) {
    if (!alert) return;
    const classes = ["alert"];

    const alertTypeClass = {
      [AlertType.ERROR]: "alert-error",
      [AlertType.WARN]: "alert-warn",
      [AlertType.INFO]: "alert-info",
    };
    classes.push(alertTypeClass[alert.type]);

    if (alert.fadeout) {
      classes.push("fadeout");
    }

    return classes.join(" ");
  }
}
