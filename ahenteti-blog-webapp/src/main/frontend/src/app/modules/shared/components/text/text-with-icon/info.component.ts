import { Component } from "@angular/core";

@Component({
  selector: "app-info",
  template: /* html */ `
    <app-text-with-icon icon="info">
      <ng-content></ng-content>
    </app-text-with-icon>
  `,
  styles: [
    /* css */ `
      :host {
        --text-with-icon-text-color: var(--info-text-color);
        --text-with-icon-background-color: var(--info-background-color);
      }
    `,
  ],
})
export class InfoComponent {}
