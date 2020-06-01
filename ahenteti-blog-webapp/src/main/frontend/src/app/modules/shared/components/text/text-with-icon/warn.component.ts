import { Component } from "@angular/core";

@Component({
  selector: "app-warn",
  template: /* html */ `
    <app-text-with-icon icon="warn">
      <ng-content></ng-content>
    </app-text-with-icon>
  `,
  styles: [
    /* css */ `
      :host {
        --text-with-icon-text-color: var(--warn-text-color);
        --text-with-icon-background-color: var(--warn-background-color);
      }
    `,
  ],
})
export class WarnComponent {}
