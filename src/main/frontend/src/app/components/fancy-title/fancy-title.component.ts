import { Component, Input } from "@angular/core";

@Component({
  selector: "app-fancy-title",
  templateUrl: "./fancy-title.component.html",
  styleUrls: ["./fancy-title.component.scss"],
})
export class FancyTitleComponent {
  @Input()
  public value: string;
}
