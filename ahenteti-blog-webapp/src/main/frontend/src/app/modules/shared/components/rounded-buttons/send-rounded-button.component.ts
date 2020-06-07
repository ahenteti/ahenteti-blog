import { Component } from "@angular/core";

@Component({
  selector: "app-send-rounded-button",
  template:
    '<app-rounded-button icon="ri:send-plane-fill"></app-rounded-button>',
  styles: [
    `
      :host {
        --rounded-button-size: 5rem;
        --rounded-button-border-radius: 0.3rem;
      }
    `,
  ],
})
export class SendRoundedButtonComponent {}
