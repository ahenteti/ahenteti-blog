import { Component, Input } from "@angular/core";

@Component({
  selector: "app-section-title",
  template: "<div><h2>{{ value | uppercase }}</h2></div>",
  styleUrls: ["./section-title.component.scss"],
})
export class SectionTitleComponent {
  @Input()
  public value: string;
}
