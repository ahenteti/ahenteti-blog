import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-new-button",
  templateUrl: "new-button.component.html",
  styleUrls: ["new-button.component.scss"],
})
export class NewButtonComponent {
  @Input() routerLink: string;
}
