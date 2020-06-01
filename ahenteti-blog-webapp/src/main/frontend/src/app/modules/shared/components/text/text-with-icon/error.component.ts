import { Component, Input } from "@angular/core";

@Component({
  selector: "app-error",
  template: /* html */ `
    <app-text-with-icon icon="error">
      <ng-content></ng-content>
    </app-text-with-icon>
  `,
  styles: [
    /* css */ `
      :host {
        --text-with-icon-text-color: var(--error-text-color);
        --text-with-icon-background-color: var(--error-background-color);
      }
    `,
  ],
})
export class ErrorComponent {}
