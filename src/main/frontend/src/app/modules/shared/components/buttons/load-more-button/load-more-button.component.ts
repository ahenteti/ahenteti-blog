import { Component, Input } from "@angular/core";

@Component({
  selector: "app-load-more-button",
  templateUrl: "./load-more-button.component.html",
  styleUrls: ["./load-more-button.component.scss"],
})
export class LoadMoreButtonComponent {
  @Input() text: string = "Load more...";
}
