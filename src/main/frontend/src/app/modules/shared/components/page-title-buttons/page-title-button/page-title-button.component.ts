import { Component, Input } from "@angular/core";

@Component({
  selector: "app-page-title-button",
  templateUrl: "./page-title-button.component.html",
  styleUrls: ["./page-title-button.component.scss"],
})
export class PageTitleButtonComponent {
  @Input() icon: string;
}
