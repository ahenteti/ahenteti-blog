import { Component, Input } from "@angular/core";

@Component({
  selector: "app-consult-button-link",
  templateUrl: "consult-button-link.component.html",
  styleUrls: ["consult-button-link.component.scss"],
})
export class ConsultButtonLinkComponent {
  @Input() routerLink: string;
}
