import { Component, Input } from "@angular/core";

@Component({
  selector: "app-fancy-title",
  template: "<div><h2>{{ value | uppercase }}</h2></div>",
  styleUrls: ["./fancy-title.component.scss"],
})
export class FancyTitleComponent {
  @Input()
  public value: string;
}
