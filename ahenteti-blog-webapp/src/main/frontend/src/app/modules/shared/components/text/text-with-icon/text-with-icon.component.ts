import { Component, Input } from "@angular/core";

@Component({
  selector: "app-text-with-icon",
  templateUrl: "./text-with-icon.component.html",
  styleUrls: ["./text-with-icon.component.scss"],
})
export class TextWithIconComponent {
  @Input() icon;
}
