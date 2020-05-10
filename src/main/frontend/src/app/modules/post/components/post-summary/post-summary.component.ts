import { Component, Input } from "@angular/core";
import { IPostSummary } from "../../models/post.internal.models";

@Component({
  selector: "app-post-summary",
  templateUrl: "./post-summary.component.html",
  styleUrls: ["./post-summary.component.scss"],
})
export class PostSummaryComponent {
  @Input()
  post: IPostSummary;
}
