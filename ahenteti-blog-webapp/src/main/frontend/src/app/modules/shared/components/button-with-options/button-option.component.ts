import { Component, Input } from "@angular/core";

@Component({
  selector: "app-button-option",
  template: `<span class="mat-menu-item">{{ label }}</span>`,
  styles: [
    `
      span {
        height: 3.5rem;
        line-height: 3.5rem;
      }
    `,
  ],
})
export class ButtonOptionComponent {
  @Input()
  label: string;
}
