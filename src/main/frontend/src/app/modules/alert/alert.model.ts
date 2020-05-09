export class Alert {
  type: AlertType;
  message: string;
  autoClose: boolean;
  autoCloseDuration = 3000;
  keepAfterRouteChange: boolean;

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init);
  }
}

export class Alerts extends Array<Alert> {}

export enum AlertType {
  ERROR,
  WARN,
  INFO,
}
