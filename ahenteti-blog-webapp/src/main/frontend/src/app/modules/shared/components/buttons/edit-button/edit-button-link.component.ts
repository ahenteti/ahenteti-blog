import { Component, Input } from "@angular/core";

@Component({
  selector: "app-edit-button-link",
  templateUrl: "edit-button-link.component.html",
  styleUrls: ["edit-button-link.component.scss"],
})
export class EditButtonLinkComponent {
  @Input() routerLink: string;
}
