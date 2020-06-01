import { Component, Input } from "@angular/core";

@Component({
  selector: "app-page-title",
  template: "<div><h1>{{ value }}</h1></div>",
  styleUrls: ["./page-title.component.scss"],
})
export class PageTitleComponent {
  @Input()
  public value: string;
}
